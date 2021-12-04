#! /bin/bash   
set -m
pscale connect portfolio shadow --port 3310 & pscale connect portfolio dev --port 3309 ; fg
