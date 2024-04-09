package com.moneytrace.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class HttpStatusNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public HttpStatusNotFoundException(String message) {
		super(message);
	}
}