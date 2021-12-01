using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities() 
        {
            if (Mediator == null) throw new NullReferenceException(nameof(Mediator));
            return await Mediator.Send(new List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id) 
        {
            if (Mediator == null) throw new NullReferenceException(nameof(Mediator));
            return await Mediator.Send(new Details.Query {Id = id});   
        }
        [HttpPost]
        public async Task<ActionResult> CreateActivity(Activity activity)
        {
            if (Mediator == null) throw new NullReferenceException(nameof(Mediator));
            return Ok(await Mediator.Send(new Create.Command{Activity = activity}));
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            if (Mediator == null) throw new NullReferenceException(nameof(Mediator));
            return Ok(await Mediator.Send(new Edit.Command {Activity = activity}));
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(Guid id)
        {
            if (Mediator == null) throw new NullReferenceException(nameof(Mediator));
            return Ok(await Mediator.Send(new Delete.Command {iD = id}));
        }
    }
}