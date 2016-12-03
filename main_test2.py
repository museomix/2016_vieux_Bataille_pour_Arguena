import freenect
import cv2
import numpy as np
 
"""
Grabs a depth map from the Kinect sensor and creates an image from it. 
"""

def getDepthMap():  
  depth, timestamp = freenect.sync_get_depth()
 
  # np.clip(depth, 0, 2**10 - 1, depth)
  # depth >>= 2
  depth = depth.astype(np.uint8)
 
  return depth

#function to get RGB image from kinect
def getVideo():
    array, _ = freenect.sync_get_video()
    array = cv2.cvtColor(array,cv2.COLOR_RGB2BGR)
    return array
 
 
while True:
  #get a frame from RGB camera
  frame = getVideo()
  depth = getDepthMap()
  # blur = cv2.GaussianBlur(depth, (5, 5), 0)
 
  cv2.imshow('Depth frame', depth)
  #display RGB image
  cv2.imshow('RGB image',frame)
  cv2.waitKey(5)
