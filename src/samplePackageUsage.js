/**
 * @fileoverview Sample package usage. Just for tests.
 */
goog.require('samplePackage');

//---------------------------------------------------------------------------------------------------------
// Example: Try to create new class with ISampleInterface without methods
//---------------------------------------------------------------------------------------------------------

///**
// * @constructor
// * @implements {samplePackage.ISampleInterface}
// */
//var SimpleTestClass = function() {};

//RESULT:
// src/samplePackageUsage.js:14: WARNING - property sampleMethod on interface
// samplePackage.ISampleInterface is not implemented by type SimpleTestClass
// var SimpleTestClass = function() {};

//---------------------------------------------------------------------------------------------------------
// Example: Try to create private class instance
//---------------------------------------------------------------------------------------------------------

//var inst = new samplePackage.SampleBaseClass_();

//RESULT:
// WARNING - Access to private property SampleBaseClass_ of samplePackage
// not allowed here.
// var inst = new samplePackage.SampleBaseClass_();

//---------------------------------------------------------------------------------------------------------
// Example: Try to call protected method
//---------------------------------------------------------------------------------------------------------

//var inst = new samplePackage.SampleClass();
//inst.protectedMethod();

//RESULT:
// WARNING - Access to protected property protectedMethod of
// samplePackage.SampleClass not allowed here.
// inst.protectedMethod();

//---------------------------------------------------------------------------------------------------------
// Example: Type validation.
//---------------------------------------------------------------------------------------------------------

//var inst = new samplePackage.SampleClass();
//inst.sampleMethod(true);

//RESULT:
// WARNING - actual parameter 1 of
// samplePackage.SampleClass.prototype.sampleMethod does not
// match formal parameter
// found   : boolean
// required: number
// inst.sampleMethod(true);

//---------------------------------------------------------------------------------------------------------
// Example: Arguments validation.
//---------------------------------------------------------------------------------------------------------

//var inst = new samplePackage.SampleClass();
//inst.sampleMethod(1, 2, 3);

//RESULT:
// WARNING - Function samplePackage.SampleClass.prototype.sampleMethod:
// called with 3 argument(s). Function requires at least 1 argument(s)
// and no more than 1 argument(s).
