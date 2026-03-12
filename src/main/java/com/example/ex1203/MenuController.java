
package com.example.ex1203;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model; 

@Controller
public class MenuController {
    @GetMapping({"/", "/index"})
    public String paginaPrincipal(Model model){
        model.addAttribute("paginaAtiva", "home");
        return "index";
    }
    @GetMapping("/experience")
    public String experience(Model model){
        model.addAttribute("paginaAtiva", "experience");
        return "experience";
    }
    @GetMapping("/projects")
    public String projects(Model model){
        model.addAttribute("paginaAtiva", "projects");
        return "projects";
    }
}