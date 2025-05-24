using System.ComponentModel.DataAnnotations;

namespace proyectoMVC.Models
{
    public class Login
    {
        [Required]
        public string User { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Password)]
        public string Pass { get; set; } = string.Empty;
    }
}
