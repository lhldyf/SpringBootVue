package com.lhldyf.controller.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleController {

	@RequestMapping("/")
	@ResponseBody
	String home() {
		return "Hello World!";
	}

}