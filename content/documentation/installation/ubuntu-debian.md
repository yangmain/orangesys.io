---
date: 2016-11-22T09:00:00+00:00
title: Installation
---

### Ubuntu

>```
 curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
 source /etc/lsb-release
 echo "deb https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
>```

### Debian

>```
 curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
 source /etc/os-release
 test $VERSION_ID = "7" && echo "deb https://repos.influxdata.com/debian wheezy stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
 test $VERSION_ID = "8" && echo "deb https://repos.influxdata.com/debian jessie stable" | sudo tee /etc/apt/sources.list.d/influxdb.list
>```

### telegraf.conf設定

登録後、jwt tokenを表示します。

>```
[global_tags]
[agent]
  interval = "10s"
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "10s"
  flush_jitter = "0s"
  precision = ""
  debug = false
  quiet = false
  logfile = ""
  hostname = "tele-test01"
  omit_hostname = false
[[outputs.influxdb]]
  urls = ["https://demo.i.orangesys.io/?jwt=<jwt token>"] #dashboardに表示される<jwt token>をいれてください
  database = "telegraf" # デフォルト設定、その意外のDBへアクセスできません
  retention_policy = ""
  write_consistency = "any"
  timeout = "5s"
[[inputs.cpu]]
  percpu = true
  totalcpu = true
  collect_cpu_time = false
[[inputs.disk]]
  ignore_fs = ["tmpfs", "devtmpfs"]
[[inputs.diskio]]
[[inputs.kernel]]
[[inputs.mem]]
[[inputs.processes]]
[[inputs.swap]]
[[inputs.system]]
[[inputs.net]]
  interfaces = ["eth0"]
[[inputs.netstat]]
[[outputs.influxdb]]
>```

### サービス起動

>```
  sudo apt-get update && sudo apt-get install telegraf
  sudo service telegraf start
>```

#### Ubuntu 15.04+, Debian 8+

>```
  sudo apt-get update && sudo apt-get install telegraf
  sudo systemctl start telegraf
>```
