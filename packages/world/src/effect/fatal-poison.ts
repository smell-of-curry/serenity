import {
	ActorEventIds,
	ActorEventPacket,
	EffectType
} from "@serenityjs/protocol";

import { Effect } from "./effect";

import type { Entity } from "../entity";

class FatalPoisonEffect<T extends Entity> extends Effect {
	public effectType: EffectType = EffectType.FatalPoison;
	public instant: boolean = false;

	// Equals to Poison + Wither??????
	public onTick?(entity: T): void {
		let ticksPerSecond = Math.floor(
			Math.max(25 * Math.pow(0.5, this.amplifier - 1), 12)
		);
		ticksPerSecond = Math.min(ticksPerSecond, 10);

		if (Number(entity.dimension.world.currentTick) % ticksPerSecond != 0)
			return;
		const entityHealth = entity.getComponent("minecraft:health");

		if (!entity.isAlive) {
			this.duration = 0;
			return;
		}
		const packet = new ActorEventPacket();
		packet.actorRuntimeId = entity.runtime;
		packet.eventId = ActorEventIds.HURT_ANIMATION;
		packet.eventData = -1;

		entity.dimension.broadcast(packet);
		entityHealth.decreaseValue(1);
	}

	public onAdd?(_entity: T): void {}

	public onRemove?(_entity: T): void {}
}

export { FatalPoisonEffect };
