"use strict";



{
	const scriptsInEvents = {

		async Egame_Event9_Act2(runtime, localVars)
		{
			//JS code that determines where on the board the Puck impacted a wall, and then tells the rockParticals to go in the right direction. Saves between 4-7 events :3
			
			const puck = runtime.objects.Puck.getFirstInstance();
			
			let puckX = puck.x;
			let puckY = puck.y;
			
			let particalAng = getAng(puckX, puckY);
			
			const dust = runtime.objects.rockParticles.getAllInstances();
			
			runtime.globalVars.dustAngle = particalAng;
			
			console.log(dust);
			console.log(particalAng);
			
			function getAng(x, y) {
			console.log(x, y);
			let outputAng;
				if(x < 640) {
				outputAng = 180;
				}
				if(x >= 640) {
				outputAng = 0;
				}
				if(y < 140) {
				outputAng = 270;
				}
				if(y >= 620) {
				outputAng = 90;
				}
				return outputAng;
			}
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
