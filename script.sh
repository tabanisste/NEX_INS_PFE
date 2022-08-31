#!/bin/sh
i=0
let b=$(arp -i wlan0 | wc -l)
let c=2
while [ $c -le $b ]
do
if ! arp -i wlan0 | sed -n "$c p" | grep -q incomplete 
then
   let "i+=1"
fi
let c="c+=1"
done
echo $i