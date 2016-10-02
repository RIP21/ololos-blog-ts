package com.losmoney;

import com.ololos.OlolosWebappApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = OlolosWebappApplication.class)
@WebAppConfiguration
public class LosmoneyWebappApplicationTests {

    @Test
    public void contextLoads() {
    }

}
