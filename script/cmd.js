module.exports= {
    //gateway_info
    macaddress:" sed -n \'3p\' /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/local_conf.json | sed \'s/.*://\' | grep -o -P \'(?<=\").*(?=\")\' ",
    status:"if ping -q -c 1 localhost 2>&1 > /dev/null ; then \n echo \"ON\" \n else \n echo \"OFF\" \n fi ",
    version:"lsb_release -d | awk \'{print$2,$3,$4}\'",
    uptime:"uptime -p",
    date:"date",
    hostname:"uname -a | awk \'{print $2}\'",
    sn:"cat /proc/cpuinfo | grep Serial | cut -d \' \' -f 2",
    //netwok_info
    interface:" ip r | head -n 1 |awk \'{print $5}\'",
    type:"ip r | head -n 1 |awk \'{print $7}\'",
    mac_address:" ifconfig eth0 | grep ether | awk \'{print $2}\'",
    ipv4:"ip r | head -n 1 |awk \'{print $9}\'",
    ipv6:"/sbin/ifconfig eth0 | grep inet6 | awk \'{print $2}\'",
    gateway:"ip r | head -n 1 |awk \'{print $3}\'",
    dns:"cat /etc/resolv.conf | grep nameserver | awk \'{print$2}\'",
    rx:"cat /sys/class/net/eth0/statistics/rx_bytes",
    tx:"cat /sys/class/net/eth0/statistics/tx_bytes",
    //wireless_info 
    SSID: "sed -n \'3p\' /etc/hostapd/hostapd.conf | sed \'s/.*=//\'",
    interfacewi: "sed -n \'2p\' /etc/hostapd/hostapd.conf | sed \'s/.*=//\'",
    standardw: "sed -n \'4p\' /etc/hostapd/hostapd.conf | sed \'s/.*=//\'",
    ipadd: " ip r | sed -n \'2p\' | awk \'{print $9}\' ",
    typewi: " ip r | sed -n \'2p\' | awk \'{print $5}\' ",
    macadd: "ifconfig wlan0 | grep inet6 | awk \'{print $2}\'",
    number_of_cl: "bash ./script/piwi/script.sh",
    mode:"iwconfig wlan0 | awk \'{print $4}\' | sed -n \'1p\'| sed \'s/.*://\' ",
}

