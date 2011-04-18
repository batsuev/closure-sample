/**
 * @fileoverview Sample package.
 */
goog.provide('samplePackage');

//------------------------------------------------------------------------------
//    ISampleInterface
//------------------------------------------------------------------------------

/**
 * ISampleInterface
 * @interface
 * @export
 */
samplePackage.ISampleInterface = function() {};

/**
 * Sample interface method.
 * @param {number} param Just param.
 * @return {number} Smth.
 */
samplePackage.ISampleInterface.prototype.sampleMethod = function(param) {};

//------------------------------------------------------------------------------
//    SampleBaseClass
//------------------------------------------------------------------------------

/**
 * Sample hidden base class.
 * @constructor
 * @private
 */
samplePackage.SampleBaseClass_ = function() {};

/**
 * Protected method.
 * @protected
 * @return {number} smth.
 */
samplePackage.SampleBaseClass_.prototype.protectedMethod = function() {
    return 42;
};

//------------------------------------------------------------------------------
//    SampleClass
//------------------------------------------------------------------------------

/**
 * Sample class.
 * @constructor
 * @extends {samplePackage.SampleBaseClass_}
 * @implements {samplePackage.ISampleInterface}
 * @export
 */
samplePackage.SampleClass = function() {
    samplePackage.SampleBaseClass_.call(this);
};
goog.inherits(samplePackage.SampleClass, samplePackage.SampleBaseClass_);

/**
 * @inheritDoc
 * @export
 */
samplePackage.SampleClass.prototype.sampleMethod = function(param) {
    return param * this.protectedMethod();
};

