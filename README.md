// Setup

Following advice from http://euanfreeman.co.uk/openkinect-python-and-opencv/ to get kinect and opencv on MAc

1 - Follow instructions to Install:


libfreenect Don't build it with homebrew, build it from source
https://openkinect.org/wiki/Main_Page

Install it with DBUILD Python OFF DBUILD Python 3 OFF but DBUILD Python 2 ON

It bugged I had to remove python 3 in pyenv it messed up things.

Then install the wrappers 

And test freelibnect/build/bin/freenect-glview

opencv https://www.learnopencv.com/install-opencv-3-on-yosemite-osx-10-10-x/

// main_test2.py Little test

Here the getDepthMap function takes the depth map from the Kinect sensor, clips the array so that the maximum depth is 1023 (effectively removing distance objects and noise) and turns it into an 8 bit array (which OpenCV can render as grayscale). The array returned from getDepthMap can be used like a grayscale OpenCV image – to demonstrate I apply a Gaussian blur. Finally, imshow renders the image in a window and waitKey is there to make sure image updates actually show.

// Library of stuff in libfreenect https://github.com/amiller/libfreenect-goodies 

Look at code, do not try to install

// Sweep distance test => Distance resolution:
- at 2 meters is ~3cm, not good enough for our use case
- even closer it has noise and is not good enough either.

// Color test => There were problems with brightness, use a color filter
http://www.pyimagesearch.com/2016/02/15/determining-object-color-with-opencv/
+ previous tutorials on masks and shaping

python main.py -f filters/filter-1.jpg 1 -f filters/filter-2.jpg 2 -f filters/filter-3.jpg 3 -f filters/filter-4.jpg 4 -f filters/filter-5.jpg 5 -f filters/filter-6.jpg 6

python main.py -f filters/real-1.jpg 1 -f filters/real-2.jpg 2 -f filters/real-3.jpg 3 -f filters/real-4.jpg 4

// BUG WITH LINK DURING HOMEBREW

// symlink the opencv files into our directory
ln -s /usr/local/Cellar/opencv/2.4.13.1/lib/python2.7/site-packages/cv.py cv.py

ln -s /usr/local/Cellar/opencv/2.4.13.1/lib/python2.7/site-packages/cv.so cv.so

==> Pouring numpy-1.11.2.el_capitan.bottle.tar.gz
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/f2py
Target /usr/local/bin/f2py
already exists. You may want to remove it:
  rm '/usr/local/bin/f2py'

To force the link and overwrite all conflicting files:
  brew link --overwrite numpy

To list all files that would be deleted:
  brew link --overwrite --dry-run numpy

Possible conflicting files are:
/usr/local/bin/f2py
==> Caveats
If you use system python (that comes - depending on the OS X version -
with older versions of numpy, scipy and matplotlib), you may need to
ensure that the brewed packages come earlier in Python's sys.path with:
  mkdir -p /Users/mcoenca/Library/Python/2.7/lib/python/site-packages
  echo 'import sys; sys.path.insert(1, "/usr/local/lib/python2.7/site-packages")' >> /Users/mcoenca/Library/Python/2.7/lib/python/site-packages/homebrew.pth

  //BUG WITH OPENCV3
  => Caveats
This formula is keg-only, which means it was not symlinked into /usr/local.

opencv3 and opencv install many of the same files.

Generally there are no consequences of this for you. If you build your
own software and it requires this formula, you'll need to add to your
build variables:

    LDFLAGS:  -L/usr/local/opt/opencv3/lib
    CPPFLAGS: -I/usr/local/opt/opencv3/include
    PKG_CONFIG_PATH: /usr/local/opt/opencv3/lib/pkgconfig


If you need Python to find bindings for this keg-only formula, run:
  echo /usr/local/opt/opencv3/lib/python2.7/site-packages >> /usr/local/lib/python2.7/site-packages/opencv3.pth
