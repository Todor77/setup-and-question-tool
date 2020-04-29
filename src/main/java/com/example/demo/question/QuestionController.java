package com.example.demo.question;

import com.example.demo.domain.Question;
import com.example.demo.repository.QuestionRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class QuestionController {

	private final QuestionRepository questionRepository;

	public QuestionController(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

//	@GetMapping(value = "/questions")
//	public List<Question> getQuestion() {
//		return questionRepository.findAll();
//	}
//
//	@GetMapping(value = "/questions/{id}")
//	public Optional<Question> getQuestionById(@PathVariable(required = true) int id) {
//		return questionRepository.findById(id);
//	}

//	@PostMapping(value = "/questions")
//	public Question save(Question q) {
//		return questionRepository.save(q);
//	}

}
