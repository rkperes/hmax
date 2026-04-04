package main

import (
	"flag"
	"log"
	"net/http"

	_ "github.com/stretchr/testify"
)

func main() {
	port := flag.String("p", "8080", "port to listen on")
	flag.Parse()

	http.DefaultServeMux.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"message":"hello"}`))
	})

	log.Fatal(http.ListenAndServe(":"+*port, nil))
}
