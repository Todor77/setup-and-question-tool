package com.example.demo.event;

import com.example.demo.domain.Answer;
import com.example.demo.domain.Question;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler
public class QuestionEventHandler {

	@HandleBeforeCreate
	public void setDefaultValues(Question question){
		question.setAnswer(new Answer());
	}
}
