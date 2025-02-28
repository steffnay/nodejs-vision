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
    const servicePath = visionModule.v1.ImageAnnotatorClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = visionModule.v1.ImageAnnotatorClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = visionModule.v1.ImageAnnotatorClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new visionModule.v1.ImageAnnotatorClient();
    assert(client);
  });

  describe('batchAnnotateImages', () => {
    it('invokes batchAnnotateImages without error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
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
      const client = new visionModule.v1.ImageAnnotatorClient({
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

  describe('batchAnnotateFiles', () => {
    it('invokes batchAnnotateFiles without error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
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
      client._innerApiCalls.batchAnnotateFiles = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchAnnotateFiles(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchAnnotateFiles with error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchAnnotateFiles = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchAnnotateFiles(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('asyncBatchAnnotateImages', function() {
    it('invokes asyncBatchAnnotateImages without error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const outputConfig = {};
      const request = {
        requests: requests,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateImages = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .asyncBatchAnnotateImages(request)
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

    it('invokes asyncBatchAnnotateImages with error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const requests = [];
      const outputConfig = {};
      const request = {
        requests: requests,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.asyncBatchAnnotateImages = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .asyncBatchAnnotateImages(request)
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
      const client = new visionModule.v1.ImageAnnotatorClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateImages
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.asyncBatchAnnotateImages
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('asyncBatchAnnotateFiles', function() {
    it('invokes asyncBatchAnnotateFiles without error', done => {
      const client = new visionModule.v1.ImageAnnotatorClient({
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
      const client = new visionModule.v1.ImageAnnotatorClient({
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
      const client = new visionModule.v1.ImageAnnotatorClient({
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
describe('ProductSearchClient', () => {
  it('has servicePath', () => {
    const servicePath = visionModule.v1.ProductSearchClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = visionModule.v1.ProductSearchClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = visionModule.v1.ProductSearchClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new visionModule.v1.ProductSearchClient();
    assert(client);
  });

  describe('createProductSet', () => {
    it('invokes createProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const productSet = {};
      const request = {
        parent: formattedParent,
        productSet: productSet,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const productSet = {};
      const request = {
        parent: formattedParent,
        productSet: productSet,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listProductSets', () => {
    it('invokes listProductSets without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const productSetsElement = {};
      const productSets = [productSetsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        productSets: productSets,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductSets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.productSets);
      };

      client.listProductSets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.productSets);
        done();
      });
    });

    it('invokes listProductSets with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductSets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProductSets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getProductSet', () => {
    it('invokes getProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateProductSet', () => {
    it('invokes updateProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const productSet = {};
      const request = {
        productSet: productSet,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const productSet = {};
      const request = {
        productSet: productSet,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteProductSet', () => {
    it('invokes deleteProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(request);

      client.deleteProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createProduct', () => {
    it('invokes createProduct without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const product = {};
      const request = {
        parent: formattedParent,
        product: product,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const productCategory = 'productCategory-1607451058';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProduct with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const product = {};
      const request = {
        parent: formattedParent,
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listProducts', () => {
    it('invokes listProducts without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const productsElement = {};
      const products = [productsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        products: products,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProducts = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.products);
      };

      client.listProducts(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.products);
        done();
      });
    });

    it('invokes listProducts with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProducts = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProducts(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getProduct', () => {
    it('invokes getProduct without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const productCategory = 'productCategory-1607451058';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProduct with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateProduct', () => {
    it('invokes updateProduct without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const product = {};
      const request = {
        product: product,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const productCategory = 'productCategory-1607451058';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        productCategory: productCategory,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateProduct(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProduct with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const product = {};
      const request = {
        product: product,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateProduct(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteProduct', () => {
    it('invokes deleteProduct without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(request);

      client.deleteProduct(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteProduct with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteProduct(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createReferenceImage', () => {
    it('invokes createReferenceImage without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const referenceImage = {};
      const request = {
        parent: formattedParent,
        referenceImage: referenceImage,
      };

      // Mock response
      const name = 'name3373707';
      const uri = 'uri116076';
      const expectedResponse = {
        name: name,
        uri: uri,
      };

      // Mock Grpc layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createReferenceImage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createReferenceImage with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const referenceImage = {};
      const request = {
        parent: formattedParent,
        referenceImage: referenceImage,
      };

      // Mock Grpc layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createReferenceImage(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteReferenceImage', () => {
    it('invokes deleteReferenceImage without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request
      );

      client.deleteReferenceImage(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteReferenceImage with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteReferenceImage(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listReferenceImages', () => {
    it('invokes listReferenceImages without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const pageSize = 883849137;
      const nextPageToken = '';
      const referenceImagesElement = {};
      const referenceImages = [referenceImagesElement];
      const expectedResponse = {
        pageSize: pageSize,
        nextPageToken: nextPageToken,
        referenceImages: referenceImages,
      };

      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.referenceImages);
      };

      client.listReferenceImages(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.referenceImages);
        done();
      });
    });

    it('invokes listReferenceImages with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listReferenceImages(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getReferenceImage', () => {
    it('invokes getReferenceImage without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const uri = 'uri116076';
      const expectedResponse = {
        name: name2,
        uri: uri,
      };

      // Mock Grpc layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getReferenceImage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getReferenceImage with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.referenceImagePath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]',
        '[REFERENCE_IMAGE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getReferenceImage(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('addProductToProductSet', () => {
    it('invokes addProductToProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const formattedProduct = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
        product: formattedProduct,
      };

      // Mock Grpc layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request
      );

      client.addProductToProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes addProductToProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const formattedProduct = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
        product: formattedProduct,
      };

      // Mock Grpc layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.addProductToProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('removeProductFromProductSet', () => {
    it('invokes removeProductFromProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const formattedProduct = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
        product: formattedProduct,
      };

      // Mock Grpc layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request
      );

      client.removeProductFromProductSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes removeProductFromProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const formattedProduct = client.productPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT]'
      );
      const request = {
        name: formattedName,
        product: formattedProduct,
      };

      // Mock Grpc layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.removeProductFromProductSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listProductsInProductSet', () => {
    it('invokes listProductsInProductSet without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const productsElement = {};
      const products = [productsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        products: products,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.products);
      };

      client.listProductsInProductSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.products);
        done();
      });
    });

    it('invokes listProductsInProductSet with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.productSetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[PRODUCT_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listProductsInProductSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('importProductSets', function() {
    it('invokes importProductSets without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const inputConfig = {};
      const request = {
        parent: formattedParent,
        inputConfig: inputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .importProductSets(request)
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

    it('invokes importProductSets with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const inputConfig = {};
      const request = {
        parent: formattedParent,
        inputConfig: inputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .importProductSets(request)
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
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.importProductSets
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.importProductSets
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('purgeProducts', function() {
    it('invokes purgeProducts without error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.purgeProducts = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .purgeProducts(request)
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

    it('invokes purgeProducts with error', done => {
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.purgeProducts = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .purgeProducts(request)
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
      const client = new visionModule.v1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.purgeProducts.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.purgeProducts.metadataDecoder instanceof
          Function
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
