package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("api")
public class HelloWorldResource {

    @RequestMapping("hello")
    public HelloWorld helloWorld() {
        return new HelloWorld();
    }

}
