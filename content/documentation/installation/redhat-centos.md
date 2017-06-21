---
date: 2017-06-21T09:00:00+00:00
title: Installation
---

### Redhat & Centos & Amazon Linux

>```
 wget　https://github.com/orangesys/telegraf-output-orangesys/releases/download/1.3.2/telegraf-1.3.2-1.x86_64.rpm
 sudo yum localinstall telegraf-1.3.2-1.x86_64.rpm
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
[[outputs.orangesys]]
  urls = ["https://demo.i.orangesys.io] # 管理画面に表示されるurlを入れてください
  jwt_token= <jwt_token> # 管理画面に表示される<jwt_token>をいれてください
  database = "telegraf" # 変更できません
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

### サービス再起動

>```
 sudo service telegraf start
>```

#### CentOS 7+, RHEL 7+

>```
  sudo systemctl start telegraf
>```
