package com.jobportal.globalexception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserRegistrationExceptionHandling {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> handleValidationErrors(MethodArgumentNotValidException ex) {
	    String error = ex.getBindingResult().getFieldError().getDefaultMessage();
	    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}
	
	
	// Handle all other exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return new ResponseEntity<>("Error Message :"+ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
	
	

}
