package main

import "net/http"

func init() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.FileServer(http.Dir("public"))
		w.Header().Set("Cache-Control", "public, max-age=7200")
    w.Header().Set("Pragma", "Public")
	})
}
