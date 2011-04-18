#!/bin/bash

echo 'Calculating dependencies...'
./libs/closure/bin/calcdeps.py -p ./src -p ./libs/closure/goog -o deps --output_file=libs/closure/goog/deps.js
echo 'Done!'

echo 'Checking source code...'
gjslint -r ./src

echo 'Compiling...'
java -jar ./bin/compiler.jar \
--compilation_level ADVANCED_OPTIMIZATIONS \
--warning_level VERBOSE \
--summary_detail_level 3 \
--generate_exports \
--jscomp_warning visibility \
--jscomp_warning accessControls \
--js ./libs/closure/goog/base.js --js src/samplePackage/samplePackage.js --js src/samplePackageUsage.js \
--js_output_file ./out/sample.js