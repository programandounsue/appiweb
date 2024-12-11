package appi.apiweb;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CitaController {

    
    private List<Cita> citas = new ArrayList<>();

    
    @GetMapping("/inicio")
    public String mostrarInicio() {
        return "inicio"; 
    }

    
    @GetMapping("/agendar")
    public String mostrarFormularioAgendar(Model model) {
        model.addAttribute("cita", new Cita());
        return "agendarCita"; 
    }

    
    @PostMapping("/agendar")
    public String procesarFormulario(@ModelAttribute Cita cita, Model model) {
        
        citas.add(cita);
        model.addAttribute("citas", citas);  
        return "mostrarCitas";
    }
    @GetMapping("/")
    public String redirigirInicio() {
        return "redirect:/inicio";
    }
   
    @GetMapping("/citas")
    public String mostrarCitas(Model model) {
        model.addAttribute("citas", citas);
        return "mostrarCitas"; 
    }
}



