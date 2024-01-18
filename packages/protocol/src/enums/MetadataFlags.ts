enum MetadataFlags {
	OnFire,
	Sneaking,
	Riding,
	Sprinting,
	Action,
	Invisible,
	Tempted,
	InLove,
	Saddled,
	Powered,
	Ignited,
	Baby,
	Converting,
	Critical,
	CanShowNametag,
	AlwaysShowNametag,
	NoAI,
	Silent,
	WallClimbing,
	CanClimb,
	Swimmer,
	CanFly,
	Walker,
	Resting,
	Sitting,
	Angry,
	Interested,
	Charged,
	Tamed,
	Orphaned,
	Leashed,
	Sheared,
	Gliding,
	Elder,
	Moving,
	Breathing,
	Chested,
	Stackable,
	ShowBase,
	Rearing,
	Vibrating,
	Idling,
	EvokerSpell,
	ChargeAttack,
	WASDControlled,
	CanPowerJump,
	CanDash,
	Linger,
	HasCollision,
	AffectedByGravity,
	FireImmune,
	Dancing,
	Enchanted,
	ShowTridentRope, // Trident show an animated rope when enchanted with loyalty after they are thrown and return to their owner. To be combined with data_owner_eid.
	ContainerPrivate, // Inventory is private, doesn't drop contents when killed if true.
	Transforming,
	SpinAttack,
	Swimming,
	Bribed, // Dolphins have this set when they go to find treasure for the player.
	Pregnant,
	LayingEgg,
	RiderCanPick, // ???
	TransitionSitting,
	Eating,
	LayingDown,
}

export { MetadataFlags };
