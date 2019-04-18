package hello;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("api")
public class HelloWorldResource {

    @RequestMapping("hello")
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public HelloWorld helloWorld() {
        return new HelloWorld();
    }

}
