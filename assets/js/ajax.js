class Ajax {
    constructor(url, type, sync) {
        this.url = url;
        this.type = type;
        this.sync = sync;
    }
    newPostRequest(data){
        let req = new XMLHttpRequest();
        req.open(this.type, this.url, this.sync);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(data);
        console.log('send');
    }
}