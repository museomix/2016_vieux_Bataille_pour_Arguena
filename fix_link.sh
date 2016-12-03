for i in /u/local/lib/libfreenect*.dylib; do sudo install_name_tool -id $i $i; done
sudo install_name_tool -change libfreenect.0.2.dylib /opt/local/lib/libfreenect.0.2.dylib /opt/local/lib/libfreenect_sync.dylib
sudo install_name_tool -change libfreenect.0.2.dylib /opt/local/lib/libfreenect.0.2.dylib /opt/local/lib/libfreenect_cv.dylib
sudo install_name_tool -change libfreenect_sync.0.2.dylib /opt/local/lib/libfreenect_sync.0.2.dylib /opt/local/lib/libfreenect_cv.dylib
for i in glview regview hiview glpclview tiltdemo record cppview cvdemo; do sudo install_name_tool -change libfreenect.0.2.dylib /opt/local/lib/libfreenect.0.2.dylib /opt/local/bin/$i; sudo install_name_tool -change libfreenect_sync.0.2.dylib /opt/local/lib/libfreenect_sync.0.2.dylib /opt/local/bin/$i; done
