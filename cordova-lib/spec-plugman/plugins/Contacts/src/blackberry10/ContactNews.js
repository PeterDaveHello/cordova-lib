/*
 * Copyright 2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ContactNews = function (args) {
    this.title = args.title || "";
    this.body = args.body || "";
    this.articleSource = args.articleSource || "";
    this.companies = args.companies || [];
    this.publishedAt = new Date(parseInt(args.publishedAt, 10)) || null;
    this.uri = args.uri || "";
    this.type = args.type || "";
};

module.exports = ContactNews;
