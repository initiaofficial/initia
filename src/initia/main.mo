import Blob "mo:base/Blob";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };

    type HeaderField = (Text, Text);

    type HttpRequest = {
        method: Text;
        url: Text;
        headers: [HeaderField];
        body: Blob;
    };

    type HttpResponse = {
        status_code: Nat16;
        headers: [HeaderField];
        body: Blob;
    };

    public query func http_request(request: HttpRequest): async HttpResponse {
        return {
            status_code = 200;
            headers = [("Content-Type", "text/html")];
            body = Text.encodeUtf8("<b>Hello World!</b>");
        }
    };


};