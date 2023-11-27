# Go

```go
type RES struct {
	A string `json:"a"`
	B int    `json:"b"`
}

func HelloServer(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	res := RES{}
	res.A = "1"
	res.B = 2
	fmt.Println(res) 
	reJson, e := json.Marshal(res)
	if e != nil {
		fmt.Println(e)
	}
	fmt.Println(string(reJson))
	io.WriteString(w, string(reJson))
}
func main() {
	http.HandleFunc("/hello", HelloServer)
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		fmt.Println(err)
	}
}
```