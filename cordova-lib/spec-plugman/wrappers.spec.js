/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/
var Q = require('q'),
    plugman = require('../src/plugman/plugman');

describe('callback wrapper', function() {
    var calls = ['install', 'uninstall', 'fetch', 'config', 'owner', 'adduser', 'publish', 'unpublish', 'search', 'info', 'create', 'platform'];
    for (var i = 0; i < calls.length; i++) {
        var call = calls[i];

        describe('`' + call + '`', function() {
            var raw;
            beforeEach(function() {
                raw = spyOn(plugman.raw, call);
            });

            it('should work with no callback and success', function() {
                raw.andReturn(Q());
                plugman[call]();
                expect(raw).toHaveBeenCalled();
            });

            it('should call the callback on success', function(done) {
                raw.andReturn(Q(1));
                plugman[call](function(err) {
                    expect(err).toBeUndefined();
                    done();
                });
            });

            it('should call the callback with the error on failure', function(done) {
                var err = new Error('junk');
                raw.andCallFake(function() { return Q.reject(err)});
                plugman[call](function(err) {
                    expect(err).toEqual(err);
                    done();
                });
            });
        });
    }
});

