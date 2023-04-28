import { Agent } from "./agent.js";

export class Renderer {

    constructor(width, height, agentCount) {
        this.width = width;
        this.height = height;
        this.agents = this.createAgents(agentCount);
    }

    createAgents(agentCount) {
        let agents = [];
        for(var i = 0; i < agentCount; i++) {
            agents.push(new Agent("#0f0"));
        }
        return agents;
    }
    
    draw(ctx) {
        this.agents.forEach((a) =>  {
            ctx.beginPath();
            //ctx.ellipse(a.x, a.y, a.radius, a.radius, 0, 0, 0);
            ctx.rect(a.x, a.y, a.radius, a.radius);
            ctx.fillStyle = a.color;
            ctx.fill();
            ctx.closePath();
        });
    }

}
