#!/bin/sh
sudo mount -t ext3 /dev/mmcblk1p1 /media/sdcard
sudo swapon /dev/mmcblk1p2
sudo swapon -s
