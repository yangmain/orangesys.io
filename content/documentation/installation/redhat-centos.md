---
date: 2016-11-22T09:00:00+00:00
title: Installation
---

### Redhat & Centos & Amazon Linux

>```
 cat <<EOF | sudo tee /etc/yum.repos.d/influxdb.repo
 [influxdb]
 name = InfluxDB Repository - RHEL \$releasever
 baseurl = https://repos.influxdata.com/rhel/\$releasever/\$basearch/stable
 enabled = 1
 gpgcheck = 1
 gpgkey = https://repos.influxdata.com/influxdb.key
 EOF
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
 sudo yum install telegraf
 sudo service telegraf start
>```

#### CentOS 7+, RHEL 7+

>```
  sudo yum install telegraf
  sudo systemctl start telegraf
>```
