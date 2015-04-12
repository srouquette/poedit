var defaultItems = [
	{
		name: 'Full Plate',
		itemLevel: 66,
		dropLevel: 28,
		quality: 8,
		rarity: Rarity.Normal,
		itemClass: 'Body Armour',
		baseType: 'Full Plate',
		sockets: ['RRRRRR']
	},
	{
		name: 'Heavy Strike (Level 12)',
		itemLevel: 43,
		dropLevel: 1,
		quality: 12,
		rarity: Rarity.Normal,
		itemClass: 'Gem',
		baseType: 'Heavy Strike',
		sockets: []
	},
	{
		name: 'Armourer\'s Scrap',
		itemLevel: 53,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Armourer\'s Scrap',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Orb of Alchemy',
		itemLevel: 17,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Orb of Alchemy',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Orb of Augmentation',
		itemLevel: 29,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Orb of Augmentation',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Chromatic Orb',
		itemLevel: 9,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Chromatic Orb',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Rusted Sword',
		itemLevel: 9,
		dropLevel: 1,
		quality: 0,
		itemClass: 'One Hand Sword',
		baseType: 'Rusted Sword',
		rarity: Rarity.Rare,
		sockets: ['B', 'G']
	},
	{
		name: 'Summon Chaos Golem',
		itemLevel: 68,
		dropLevel: 30,
		quality: 0,
		itemClass: 'Gem',
		baseType: 'Summon Chaos Golem',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Added Fire Damage (Level 10)',
		itemLevel: 54,
		dropLevel: 12,
		quality: 0,
		itemClass: 'Gem',
		baseType: 'Added Fire Damage',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Exalted Orb',
		itemLevel: 67,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Exalted Orb',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Crypt Map',
		itemLevel: 67,
		dropLevel: 66,
		quality: 0,
		itemClass: 'Map',
		baseType: 'Crypt Map',
		rarity: Rarity.Unique,
		sockets: []
	},
	{
		name: 'Great White Claw',
		itemLevel: 62,
		dropLevel: 58,
		quality: 8,
		itemClass: 'Claw',
		baseType: 'Great White Claw',
		rarity: Rarity.Magic,
		sockets: ['R','GG']
	},
	{
		name: 'Occultist\'s Vestment',
		itemLevel: 67,
		dropLevel: 57,
		quality: 0,
		itemClass: 'Body Armour',
		baseType: 'Occultist\'s Vestment',
		rarity: Rarity.Normal,
		sockets: ['RB','GBB','B']
	},
	{
		name: 'Highland Blade',
		itemLevel: 54,
		dropLevel: 44,
		quality: 0,
		itemClass: 'Two Hand Sword',
		baseType: 'Highland Blade',
		rarity: Rarity.Magic,
		sockets: ['RRGRR']
	},
	{
		name: 'Iron Hat',
		itemLevel: 78,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Helmet',
		baseType: 'Iron Hat',
		rarity: Rarity.Normal,
		sockets: ['B']
	},
	{
		name: 'Leather Cap',
		itemLevel: 23,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Helmet',
		baseType: 'Leather Cap',
		rarity: Rarity.Normal,
		sockets: ['RGB','G']
	},
	{
		name: 'Crusader Plate',
		itemLevel: 69,
		dropLevel: 59,
		quality: 0,
		itemClass: 'Body Armor',
		baseType: 'Crusader Plate',
		rarity: Rarity.Unique,
		sockets: ['RR','RR']
	},
	{
		name: 'Simple Robe',
		itemLevel: 68,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Body Armor',
		baseType: 'Simple Robe',
		rarity: Rarity.Unique,
		sockets: ['WWWWWW']
	},
	{
		name: 'Holy Chainmail',
		itemLevel: 66,
		dropLevel: 35,
		quality: 0,
		itemClass: 'Body Armor',
		baseType: 'Holy Chainmail',
		rarity: Rarity.Unique,
		sockets: ['R','B']
	},
	{
		name: 'Imperial Staff',
		itemLevel: 66,
		dropLevel: 66,
		quality: 0,
		itemClass: 'Staff',
		baseType: 'Imperial Staff',
		rarity: Rarity.Unique,
		sockets: ['B']
	},
	{
		name: 'Royal Bow',
		itemLevel: 69,
		dropLevel: 28,
		quality: 0,
		itemClass: 'Bow',
		baseType: 'Royal Bow',
		rarity: Rarity.Rare,
		sockets: ['G','GG','B']
	},
	{
		name: 'Royal Bow',
		itemLevel: 41,
		dropLevel: 28,
		quality: 0,
		itemClass: 'Bow',
		baseType: 'Royal Bow',
		rarity: Rarity.Rare,
		sockets: ['R','GG','R']
	},
	{
		name: 'Rusted Spike',
		itemLevel: 3,
		dropLevel: 3,
		quality: 0,
		itemClass: 'One Hand Sword',
		baseType: 'Rusted Spike',
		rarity: Rarity.Normal,
		sockets: ['G']
	},
	{
		name: 'Rusted Spike',
		itemLevel: 38,
		dropLevel: 3,
		quality: 0,
		itemClass: 'One Hand Sword',
		baseType: 'Rusted Spike',
		rarity: Rarity.Normal,
		sockets: ['GG','R']
	},
	{
		name: 'Basket Rapier',
		itemLevel: 19,
		dropLevel: 17,
		quality: 0,
		itemClass: 'One Hand Sword',
		baseType: 'Basket Rapier',
		rarity: Rarity.Magic,
		sockets: ['GG']
	},
	{
		name: 'Karui Chopper',
		itemLevel: 62,
		dropLevel: 58,
		quality: 0,
		itemClass: 'Two Hand Mace',
		baseType: 'Karui Chopper',
		rarity: Rarity.Magic,
		sockets: ['RRR','B']
	},
	{
		name: 'Stone Hammer',
		itemLevel: 38,
		dropLevel: 15,
		quality: 0,
		itemClass: 'One Hand Mace',
		baseType: 'Stone Hammer',
		rarity: Rarity.Normal,
		sockets: ['R']
	},
	{
		name: 'Rock Breaker',
		itemLevel: 73,
		dropLevel: 41,
		quality: 0,
		itemClass: 'One Hand Mace',
		baseType: 'Rock Breaker',
		rarity: Rarity.Magic,
		sockets: ['G']
	},
	{
		name: 'Gavel',
		itemLevel: 66,
		dropLevel: 60,
		quality: 0,
		itemClass: 'One Hand Mace',
		baseType: 'Gavel',
		rarity: Rarity.Normal,
		sockets: ['R']
	},
	{
		name: 'Jade Amulet',
		itemLevel: 44,
		dropLevel: 7,
		quality: 0,
		itemClass: 'Amulet',
		baseType: 'Jade Amulet',
		rarity: Rarity.Magic,
		sockets: []
	},
	{
		name: 'Coral Amulet',
		itemLevel: 8,
		dropLevel: 2,
		quality: 0,
		itemClass: 'Amulet',
		baseType: 'Coral Amulet',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Leather Belt',
		itemLevel: 72,
		dropLevel: 10,
		quality: 0,
		itemClass: 'Belt',
		baseType: 'Leather Belt',
		rarity: Rarity.Rare,
		sockets: []
	},
	{
		name: 'Tropical Island Map',
		itemLevel: 67,
		dropLevel: 66,
		quality: 0,
		itemClass: 'Map',
		baseType: 'Tropical Island Map',
		rarity: Rarity.Magic,
		sockets: []
	},
	{
		name: 'Torture Chamber Map',
		itemLevel: 72,
		dropLevel: 72,
		quality: 0,
		itemClass: 'Map',
		baseType: 'Torture Chamber Map',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Crimson Jewel',
		itemLevel: 20,
		dropLevel: 12,
		quality: 0,
		itemClass: 'Jewel',
		baseType: 'Crimson Jewel',
		rarity: Rarity.Magic,
		sockets: []
	},
	{
		name: 'Viridian Jewel',
		itemLevel: 72,
		dropLevel: 61,
		quality: 0,
		itemClass: 'Jewel',
		baseType: 'Viridian Jewel',
		rarity: Rarity.Unique,
		sockets: []
	},
	{
		name: 'Scroll of Wisdom',
		itemLevel: 75,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Scroll of Wisdom',
		rarity: Rarity.Normal,
		sockets: []
	},
	{
		name: 'Portal Scroll',
		itemLevel: 5,
		dropLevel: 1,
		quality: 0,
		itemClass: 'Currency',
		baseType: 'Portal Scroll',
		rarity: Rarity.Normal,
		sockets: []
	},

];
