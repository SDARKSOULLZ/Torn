module.exports = function Missile(ownr, i, weaponID, angl){
	var self = {
		type:"Missile",
		id:i, // unique identifier
		color:ownr.color, // whose side i'm on
		dmg:wepns[weaponID].Damage,
		
		x:ownr.x,
		y:ownr.y,
		sx:ownr.sx,
		sy:ownr.sy,
		vx:Math.cos(angl) * wepns[weaponID].Speed,
		vy:Math.sin(angl) * wepns[weaponID].Speed,
		angle:angl,
		
		owner:ownr,
		locked:0, // player I'm locked onto
		timer: 0, // since spawn
		lockedTimer: 0, // since locking on to my current target (or is it since first locking onto anyone?)
		wepnID:weaponID,
		goalAngle:0 // the angle I'm turning to match
	}
	self.tick = function(){
		
		self.move();
		if(self.timer++ > 10 * wepns[weaponID].Range / wepns[weaponID].Speed) self.die(); // out of range -> die
		if(self.x > sectorWidth || self.x < 0 || self.y > sectorWidth || self.y < 0) self.die();//out of sector
		
		if(self.timer >= 20 && self.wepnID == 13){ // missile swarm
			for(var i = 0; i < 6; i++){ // spawn 6 missiles
				var r = Math.random();
				var bAngle = self.angle + r * 2 - 1;
				var missile = Missile(self.owner, r, 10, bAngle);
				missile.x = self.x;
				missile.y = self.y;
				missiles[self.sy][self.sx][r] = missile;
			}
			self.die(); // and then die
		}
	}
	self.move = function(){
		
		if(self.locked != 0 && typeof self.locked === 'number'){
			if(self.lockedTimer++ > 7 * 25) self.die(); // if locked for >7s, die
			
			var target = players[self.sy][self.sx][self.locked]; // try 2 find the target object
			if(typeof target === 'undefined' && bases[self.sy][self.sx].color != self.color) target = bases[self.sy][self.sx];
			if(target == 0) target = asts[self.sy][self.sx][self.locked];
			if(typeof target === 'undefined') self.locked = 0;
			
			else{ // if we found it, then...
			
				if(target.type === "Player") target.isLocked = true;
				
				//on impact
				if(target.sx == self.sx && target.sy == self.sy && squaredDist(target,self) < 10000*(self.wepnID == 38?5:1) && target.turretLive != false /*we don't know it's a base. can't just say ==true.*/ ){
					target.dmg(self.dmg, self);
					self.die();
					if(self.wepnID == 12 && (target.type === 'Player' || target.type === 'Base')) target.EMP(40); // emp missile
					return;
				}
				
				if(self.wepnID != 38){ // 38: proximity fuze
					if(self.timer == 1 || tick % 4 == 0) self.goalAngle = angleBetween(target,self);
					self.angle = findBisector(findBisector(self.goalAngle, self.angle), self.angle);// turn towards goal
				}
				self.vx = Math.cos(self.angle) * wepns[weaponID].Speed; // update velocity
				self.vy = Math.sin(self.angle) * wepns[weaponID].Speed;
				
			}
		}
		
		if(self.locked == 0) self.lockedTimer = 0;
		
		var accelMult = 1-25/(self.timer+25); // pick up speed w/ time
		self.x+=self.vx*accelMult;
		self.y+=self.vy*accelMult; // move on tick
		
	}
	self.die = function(){
		sendAllSector('sound', {file:"boom2",x:self.x, y:self.y, dx:self.vx, dy:self.vy}, self.sx, self.sy);
		delete missiles[self.sy][self.sx][self.id];
	}
	return self;
};