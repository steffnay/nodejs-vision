// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const visionModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ImageAnnotatorClient', () => {
  it('has servicePath', () => {
    const servicePath = visionModule.v1p2beta1.ImageAnnotatorClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = visionModule.v1p2beta1.ImageAnnotatorClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = visionModule.v1p2beta1.ImageAnnotatorClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new visionModule.v1p2beta1.ImageAnnotatorClient();
    assert(client);
  });

  describe('batchAnnotateImages', () => {
    it('invokes batchAnnotateImages without error', done => {
      const client = new visionModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchAnnotateImages(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchAnnotateImages with error', done => {
      const client = new visionModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchAnnotateImages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchAnnotateImages(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('asyncBatchAnnotateFiles', function() {
    it('invokes asyncBatchAnnotateFiles without error', done => {
      const client = new visionModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .asyncBatchAnnotateFiles(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes asyncBatchAnnotateFiles with error', done => {
      const client = new visionModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateFiles = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .asyncBatchAnnotateFiles(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new visionModule.v1p2beta1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateFiles
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateFiles
          .metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
