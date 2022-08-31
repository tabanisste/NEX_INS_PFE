var express = require('express');
var app = express();
var msg = require('./script/test');
var commande=require('./script/cmd');
const { version } = require('./script/cmd');
const exec = require('child_process').exec;


app.set('view engine', 'ejs');
app.get('/myform', async function(req, res){  
    var sann = req.query.san;
    var pann = req.query.pan;
    var pdnn = req.query.pdn; 
    var shell1 =` sudo cp -f ~/test2/conf.json /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/local_conf.json | sudo sed -i -e \'s/pan/${pann}/g\' -e \'s/pdn/${pdnn}/g\' -e \'s/san/\"${sann}\"/g\' /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/local_conf.json`;  
    exec(shell1) ; 
    res.redirect('lora')
}); 
app.get('/wifi', async function(req, res){  
  var cco = req.query.cco;
  var inter = req.query.interr;
  var ssid = req.query.ssidd;
  var stda = req.query.stda; 
  var chn = req.query.chn; 
  var psw = req.query.psw;  
  var sec = req.query.sec;  
  var shell2 =` sudo cp -f ~/test2/wifi.conf /etc/hostapd/hostapd.conf | sudo sed -i -e \'s/cco/${cco}/g\' -e \'s/interr/${inter}/g\' -e \'s/ssidd/${ssid}/g\' -e \'s/stda/${stda}/g\' -e \'s/chn/${chn}/g\' -e \'s/psw/${psw}/g\' -e \'s/sec/${sec}/g\' /etc/hostapd/hostapd.conf`;  
  exec(shell2) ; 
  res.redirect('network')
}); 
app.get('/dhcp', async function(req, res){  
  var interd = req.query.interd;
  var dhcpmi = req.query.dhcpmi;
  var dhcpma = req.query.dhcpma; 
  var dhcpm = req.query.dhcpm;
  var dhcpd = req.query.dhcpd;
  var dnsd = req.query.dnsd;
  var aliar = req.query.aliar;

  var shell3 =` sudo cp -f ~/test2/dnsm.conf /etc/dnsmasq.conf | sudo sed -i -e \'s/interd/${interd}/g\'  -e \'s/dhcpmi/${dhcpmi}/g\' -e \'s/dhcpma/${dhcpma}/g\' -e \'s/dhcpm/${dhcpm}/g\'  -e \'s/dhcpd/\"${dhcpd}\"/g\' -e \'s/dnsd/\"${dnsd}\"/g\' -e \'s/aliar/\"${aliar}\"/g\' /etc/dnsmasq.conf`;  
  exec(shell3) ; 
  res.redirect('network')
}); 
  
app.use(express.static( "views" ) );
app.get('/', async function(req, res) {
    const macadress = await msg.myFunc(commande.macaddress)
    const status = await msg.myFunc(commande.status)
    const version = await msg.myFunc(commande.version)
    const uptime = await msg.myFunc(commande.uptime)
    const date = await msg.myFunc(commande.date)
    const hostname = await msg.myFunc(commande.hostname)
    const interface = await msg.myFunc(commande.interface)
    const type = await msg.myFunc(commande.type)
    const mac_address = await msg.myFunc(commande.mac_address)
    const ipv4 = await msg.myFunc(commande.ipv4)
    const ipv6 = await msg.myFunc(commande.ipv6)
    const gateway = await msg.myFunc(commande.gateway)
    const dns = await msg.myFunc(commande.dns)
    const rx = await msg.myFunc(commande.rx)
    const tx = await msg.myFunc(commande.tx)
    const SSID = await msg.myFunc(commande.SSID)
    const interfacewi = await msg.myFunc(commande.interfacewi)
    const standardw = await msg.myFunc(commande.standardw)
    const ipadd = await msg.myFunc(commande.ipadd)
    const typewi = await msg.myFunc(commande.typewi)
    const macadd = await msg.myFunc(commande.macadd)
    const number_of_cl = await msg.myFunc(commande.number_of_cl)
    const mode = await msg.myFunc(commande.mode)
    const sn = await msg.myFunc(commande.sn)

      res.render('pages/index', {
     macadress: macadress,
     status: status,
     version: version,
     uptime: uptime,
     date: date,
     hostname: hostname,
     sn:sn,
     interface:interface,
     type:type,
     mac_address:mac_address,
     ipv4:ipv4,
     ipv6:ipv6,
     gateway:gateway,
     dns:dns,
     rx:rx,
     tx:tx,
     SSID:SSID,
     interfacewi:interfacewi,
     standardw:standardw,
     ipadd:ipadd,
     typewi:typewi,
     macadd:macadd,
     number_of_cl:number_of_cl,
     mode:mode,
  })});
app.get('/lora', function(req, res) {
  res.render('pages/lora');
});
app.get('/network', function(req, res) {
  res.render('pages/network');
});

app.listen(8281);
console.log('Server is listening on port 8081');
