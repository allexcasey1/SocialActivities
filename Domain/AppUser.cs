using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string? UserBio { get; set; }
        public ICollection<ActivityAttendee> Activities { get; set; } 
        public ICollection<Photo> Photos { get; set; }

        public AppUser() 
        {
            DisplayName = null!;
            Activities = new HashSet<ActivityAttendee>();
            Photos = new HashSet<Photo>();
        }
    }
}