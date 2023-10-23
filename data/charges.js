/*

Default Charge

"ChargeName": {
    "Name": "Assault & Battery",
    "Type": "Misdemeanor", ["Misdemeanor", "Felony", "HUT"]
    "Description": "Does this and that and this",
    "Group": 0, [1,2,3,4,5,6,7,8,9,0],
    "Default": {
        "Time": 99,
        "Fine": 1,
        "Points": 0,
    }
    "Accomplice": {
            "Time": 11,
            "Fine": 1050,
            "Points": 0
        },
        "Accessory": {
            "Time": 9,
            "Fine": 660,
            "Points": 0
        },
    }
}

*/

CHARGES = {
    "Assault & Battery": {
        "Type": "Misdemeanor",
        "Description": "Openly threatens violence or injury upon an individual either orally or through their actions and acts upon that threat.",
        "Group": 0,
        "Default": {
            "Time": 11,
            "Fine": 1050,
            "Points": 0
        },
        "Accomplice": {
            "Time": 11,
            "Fine": 1050,
            "Points": 0
        },
        "Accessory": {
            "Time": 9,
            "Fine": 660,
            "Points": 0
        },
        "Name": "Assault & Battery"
    },
    "Criminal Threats": {
        "Type": "Misdemeanor",
        "Description": "A criminal threat is when you threaten to kill or physical harm someone. That person is thereby placed in a state of reasonably sustained fear for his/her safety or for the safety of his/her immediate family, the threat is specific and unequivocal and you communicate the threat verbally, in writing, or via an electronically transmitted device.",
        "Group": 0,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1050,
            "Points": 0
        },
        "Name": "Criminal Threats"
    },
    "Brandishing of a Firearm": {
        "Type": "Misdemeanor",
        "Description": "Displaying a firearm in public without a legal reason. Open Carry is not a legal reason to have a weapon in your hand. To open carry, the weapon must be holstered or attached to a sling.",
        "Group": 0,
        "Default": {
            "Time": 7,
            "Fine": 675,
            "Points": 0
        },
        "Name": "Brandishing of a Firearm"
    },
    "Unlawful Imprisonment": {
        "Type": "Felony",
        "Description": "Restricts a person's movement within any area without justification or consent.",
        "Group": 0,
        "Default": {
            "Time": 11,
            "Fine": 1250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 11,
            "Fine": 1250,
            "Points": 0
        },
        "Accessory": {
            "Time": 9,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Unlawful Imprisonment"
    },
    "Kidnapping": {
        "Type": "Felony",
        "Description": "Abducts another person and holds them against their will.",
        "Group": 0,
        "Default": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1275,
            "Points": 0
        },
        "Name": "Kidnapping"
    },
    "Kidnapping a Gov Employee": {
        "Type": "Felony",
        "Description": "Abducts a Government Employee and holds them against their will. The following titles qualify an individual as a Government Employee: Law Enforcement Officer, Emergency Medical Services Personnel, Doctor, Judge, Mayor, Deputy Mayor, and County Clerk.",
        "Group": 0,
        "Default": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 25,
            "Fine": 2250,
            "Points": 0
        },
        "Name": "Kidnapping a Gov Employee"
    },
    "Assault with a Deadly Weapon": {
        "Type": "Felony",
        "Description": "Attempts to commit a violent injury upon another person with a deadly weapon. A weapon is described as a firearm or any type of melee item, also including motor vehicles.",
        "Group": 0,
        "Default": {
            "Time": 21,
            "Fine": 2400,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 2400,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1900,
            "Points": 0
        },
        "Name": "Assault with a Deadly Weapon"
    },
    "Manslaughter": {
        "Type": "Felony",
        "Description": "The accidental, criminally negligent, or criminally reckless killing of another individual for whom a death certificate or autopsy report may be produced or supplied within a reasonable time.",
        "Group": 0,
        "Default": {
            "Time": 150,
            "Fine": 16875,
            "Points": 0
        },
        "Accomplice": {
            "Time": 150,
            "Fine": 16875,
            "Points": 0
        },
        "Accessory": {
            "Time": 120,
            "Fine": 13500,
            "Points": 0
        },
        "Name": "Manslaughter"
    },
    "Attempted 2nd Degree Murder": {
        "Type": "Felony",
        "Description": "The attempt to unlawfully kill that doesn't involve malice aforethought-intent to seriously harm or kill, or extreme, reckless disregard for life. Heat of passion, callous disregard for human life.",
        "Group": 0,
        "Default": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 20,
            "Fine": 2250,
            "Points": 0
        },
        "Name": "Attempted 2nd Degree Murder"
    },
    "2nd Degree Murder": {
        "Type": "Felony",
        "Description": "The act of unlawfully killing that doesn't involve malice aforethought-intent to seriously harm or kill, or extreme, reckless disregard for life. Heat of passion, callous disregard for human life.",
        "Group": 0,
        "Default": {
            "Time": 300,
            "Fine": 45000,
            "Points": 0
        },
        "Accomplice": {
            "Time": 300,
            "Fine": 45000,
            "Points": 0
        },
        "Accessory": {
            "Time": 240,
            "Fine": 36000,
            "Points": 0
        },
        "Name": "2nd Degree Murder"
    },
    "Attempted 1st Degree Murder": {
        "Type": "Felony",
        "Description": "The attempt to unlawfully kill another human without justification or valid excuse, with malice aforethought / premeditation.",
        "Group": 0,
        "Default": {
            "Time": 35,
            "Fine": 5250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 35,
            "Fine": 5250,
            "Points": 0
        },
        "Accessory": {
            "Time": 28,
            "Fine": 4200,
            "Points": 0
        },
        "Name": "Attempted 1st Degree Murder"
    },
    "Attempted Murder of a Government Employee": {
        "Type": "Felony",
        "Description": "The attempt to murder a Government Employee. The following titles qualify an individual as a government employee: Law Enforcement Officer, Emergency Medical Services Personnel, Doctor, Judge, Mayor, Deputy Mayor, and County Clerk.",
        "Group": 0,
        "Default": {
            "Time": 45,
            "Fine": 5500,
            "Points": 0
        },
        "Accomplice": {
            "Time": 45,
            "Fine": 5500,
            "Points": 0
        },
        "Accessory": {
            "Time": 36,
            "Fine": 4250,
            "Points": 0
        },
        "Name": "Attempted Murder of a Government Employee"
    },
    "Gang Related Shooting": {
        "Type": "Felony",
        "Description": "Any gang-related individual who engages in a shooting/shootout with member(s) of another gang. An individual is gang-related for the purposes of this charge when they actively participate in or willfully further the purposes of a criminal street gang. This can be established by either: (1) a pattern of association and participation in felonious activity, or (2) by statements/admissions of association and/or participation made by the individual. A \"criminal street gang\" is defined as an ongoing group, club, or organization which has the primary purpose of the commission of criminal offenses, or the members of which over the last sixty days have engaged in a continuing or ongoing series of felony offenses.",
        "Group": 0,
        "Default": {
            "Time": 75,
            "Fine": 750,
            "Points": 0
        },
        "Accomplice": {
            "Time": 75,
            "Fine": 750,
            "Points": 0
        },
        "Accessory": {
            "Time": 60,
            "Fine": 500,
            "Points": 0
        },
        "Name": "Gang Related Shooting"
    },
    "Reckless Endangerment": {
        "Type": "Felony",
        "Description": "Person creates a substantial risk of serious physical injury to another person. The accused person isn't required to intend the resulting or potential harm, but must have acted in a way that showed a disregard for the foreseeable consequences of the actions.",
        "Group": 0,
        "Default": {
            "Time": 11,
            "Fine": 1250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 11,
            "Fine": 1250,
            "Points": 0
        },
        "Accessory": {
            "Time": 9,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Reckless Endangerment"
    },
    "Act of Torture": {
        "Type": "Felony",
        "Description": "The inhumane act of intentionally causing suffering or serious injury to a person's body or mental health. This can be done in order to force a person to do or say something against their own free will.",
        "Group": 0,
        "Default": {
            "Time": 100, // 25
            "Fine": 137500, //3750
            "Points": 0
        },
        "Name": "Act of Torture"
    },
    "1st Degree Murder": {
        "Type": "HUT",
        "Description": "The unlawful killing of another human without justification or valid excuse, with malice aforethought / premeditation.",
        "Group": 0,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "1st Degree Murder"
    },
    "Murder of a Government Employee": {
        "Type": "HUT",
        "Description": "The intentional act that leads to the death of a Government Employee. The following titles qualify an individual as a government employee: Law Enforcement Officer, Emergency Medical Services Personnel, Doctor, Judge, Mayor, Deputy Mayor, and County Clerk.",
        "Group": 0,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Murder of a Government Employee"
    },
    "Serial Assaults and Killings": {
        "Type": "HUT",
        "Description": "Any individual who commits the offense of Attempted 1st Degree Murder on three or more separate occasions, with each attack (1) showing premeditation or clear intent; (2) occurring in separate events at different times, and; (3) sharing common characteristics such as to suggest the reasonable possibility that the crimes were committed by the same actor or actors, may be subject to penalty up to and including life imprisonment or the death penalty.",
        "Group": 0,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Serial Assaults and Killings"
    },
    "Petty Theft": {
        "Type": "Misdemeanor",
        "Description": "Steals property in the value of less than $1,000 from another person.",
        "Group": 1,
        "Default": {
            "Time": 0,
            "Fine": 650,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 650,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 475,
            "Points": 0
        },
        "Name": "Petty Theft"
    },
    "Joyriding": {
        "Type": "Misdemeanor",
        "Description": "The taking or operating a vehicle without the owner's consent, without the intent to deprive the owner of the vehicle permanently.",
        "Group": 1,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 475,
            "Points": 0
        },
        "Name": "Joyriding"
    },
    "Tampering with a Vehicle": {
        "Type": "Misdemeanor",
        "Description": "No person shall either individually or in association with one or more other persons, willfully tamper with any vehicle or the contents thereof, or break or remove any part of a vehicle without the consent of the owner.",
        "Group": 1,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 525,
            "Points": 0
        },
        "Name": "Tampering with a Vehicle"
    },
    "Possession of Contraband in the Third Degree": {
        "Type": "Misdemeanor",
        "Description": "A person who knowingly purchased, obtained, or possesses up to three pieces of contraband. Contraband for the purposes of this charge is defined as the following items: Colored Laptops, Dongles (Excluding News USB Sticks), and any other items that has been marked for police seizure.",
        "Group": 1,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Possession of Contraband in the Third Degree"
    },
    "Possession of Contraband in the Second Degree": {
        "Type": "Misdemeanor",
        "Description": "A person who knowingly purchased, obtained, or possesses four to eight pieces of contraband. Contraband for the purposes of this charge is defined as the following items: Colored Laptops, Dongles (Excluding News USB Sticks), and any other items that has been marked for police seizure.",
        "Group": 1,
        "Default": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Possession of Contraband in the Second Degree"
    },
    "Possession of a Stolen Identification": {
        "Type": "Misdemeanor",
        "Description": "Possesses the Identification Card of another citizen without consent.",
        "Group": 1,
        "Default": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Possession of a Stolen Identification"
    },
    "Possession of Dirty Money in the Second Degree": {
        "Type": "Misdemeanor",
        "Description": "Person possesses dirty money in the amount of $15,000 or less.",
        "Group": 1,
        "Default": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Possession of Dirty Money in the Second Degree"
    },
    "Leaving Without Paying": {
        "Type": "Misdemeanor",
        "Description": "It is illegal for a person to obtain services by deception, force, threat or other unlawful means, or without lawfully compensating the provider for these services provided. This will include garages and restaurants.",
        "Group": 1,
        "Default": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 825,
            "Points": 0
        },
        "Name": "Leaving Without Paying"
    },
    "Sale of Stolen Goods or Stolen Property": {
        "Type": "Misdemeanor",
        "Description": "The bartering or selling of wares, merchandise, or property that has been stolen from another and the person knew or has reason to know the property was stolen.",
        "Group": 1,
        "Default": {
            "Time": 22,
            "Fine": 1825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 22,
            "Fine": 1825,
            "Points": 0
        },
        "Accessory": {
            "Time": 18,
            "Fine": 1475,
            "Points": 0
        },
        "Name": "Sale of Stolen Goods or Stolen Property"
    },
    "Grand Theft": {
        "Type": "Felony",
        "Description": "Steals property in the value of more than $1,000 from another person.",
        "Group": 1,
        "Default": {
            "Time": 5,
            "Fine": 1250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 1250,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 800,
            "Points": 0
        },
        "Name": "Grand Theft"
    },
    "Grand Theft Auto": {
        "Type": "Felony",
        "Description": "Unlawfully taking a vehicle belonging to another, or driving the vehicle without the owner's consent, with the intent to permanently deprive the owner of the vehicle",
        "Group": 1,
        "Default": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1275,
            "Points": 0
        },
        "Name": "Grand Theft Auto"
    },
    "Possession of Contraband in the First Degree": {
        "Type": "Felony",
        "Description": "A person who knowingly purchased, obtained, or posses any stolen property. These items are recognized as the following: Laptops, Computer Dongles and any other contraband that has been marked for police seizure. Person is found to be in possession of nine more pieces of stolen property.",
        "Group": 1,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Name": "Possession of Contraband in the First Degree"
    },
    "Robbery": {
        "Type": "Felony",
        "Description": "The act of taking or attempt to carry away with the intent of stealing any thing of value in the care, custody, control, management, or possession of any store, bank, or financial institution, including but not limited to all Fleeca Banks, 24/7 Gas Stations, LTD Gas Stations, or Vangelico's Jewelry Stores.",
        "Group": 1,
        "Default": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 20,
            "Fine": 2250,
            "Points": 0
        },
        "Name": "Robbery"
    },
    "First Degree Robbery": {
        "Type": "Felony",
        "Description": "A robbery in which the victim, a hostage, or a third party otherwise uninvolved in the crime is physically injured.",
        "Group": 1,
        "Default": {
            "Time": 30,
            "Fine": 3375,
            "Points": 0
        },
        "Accomplice": {
            "Time": 30,
            "Fine": 3375,
            "Points": 0
        },
        "Accessory": {
            "Time": 24,
            "Fine": 2500,
            "Points": 0
        },
        "Name": "First Degree Robbery"
    },
    "Grand Larceny": {
        "Type": "Felony",
        "Description": "The attempt, or robbery of the public vault location at \"Pacific Standard Public Deposit Bank\"",
        "Group": 1,
        "Default": {
            "Time": 33,
            "Fine": 4125,
            "Points": 0
        },
        "Accomplice": {
            "Time": 33,
            "Fine": 4125,
            "Points": 0
        },
        "Accessory": {
            "Time": 28,
            "Fine": 3675,
            "Points": 0
        },
        "Name": "Grand Larceny"
    },
    "Possession of Dirty Money in the First Degree": {
        "Type": "Felony",
        "Description": "Person possesses dirty money in the amount of $15,001 or more.",
        "Group": 1,
        "Default": {
            "Time": 21,
            "Fine": 2000,
            "Points": 0
        },
        "Name": "Possession of Dirty Money in the First Degree"
    },
    "Theft of an Aircraft": {
        "Type": "Felony",
        "Description": "Any person who purposefully commits the act of stealing and operating an aircraft. Person is found to be in possession, and / or found in flight of the aircraft without proper documentation.",
        "Group": 1,
        "Default": {
            "Time": 19,
            "Fine": 1800,
            "Points": 0
        },
        "Accomplice": {
            "Time": 19,
            "Fine": 1800,
            "Points": 0
        },
        "Accessory": {
            "Time": 5,
            "Fine": 1250,
            "Points": 0
        },
        "Name": "Theft of an Aircraft"
    },
    "Theft of a Commercial Aircraft": {
        "Type": "Felony",
        "Description": "Any person who commits larceny of a commercial aircraft vehicle without the consent of the owner, the business, or their appointed representative, and with the intent of using the aircraft for their own profit, purpose or pleasure",
        "Group": 1,
        "Default": {
            "Time": 23,
            "Fine": 2175,
            "Points": 0
        },
        "Accomplice": {
            "Time": 23,
            "Fine": 2175,
            "Points": 0
        },
        "Accessory": {
            "Time": 15,
            "Fine": 1775,
            "Points": 0
        },
        "Name": "Theft of a Commercial Aircraft"
    },
    "Robbery of a Financial Institution": {
        "Type": "Felony",
        "Description": "Any person, or group of people who enter a Financial Institution with the intent to forcibly remove funds or commit a felony that may affect economy or institutions stability. This will include target institutions such as the Pacific Standard Vault, Blaine County Savings Bank and Fleeca Banks. Additional influencing factors of this robbery can include, weaponry, kidnapping, evading, resisting, and possession of the stolen money.",
        "Group": 1,
        "Default": {
            "Time": 60,
            "Fine": 10500,
            "Points": 0
        },
        "Accomplice": {
            "Time": 60,
            "Fine": 10500,
            "Points": 0
        },
        "Accessory": {
            "Time": 45,
            "Fine": 8750,
            "Points": 0
        },
        "Name": "Robbery of a Financial Institution"
    },
    "Possession of Band of Notes and Small Band of Notes": {
        "Type": "Misdemeanor",
        "Description": "Seize all Band of Notes and Small Band of Notes. No time and fine will be associated with this possession until further investigations can be done.",
        "Group": 2,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Possession of Band of Notes and Small Band of Notes"
    },
    "Misdemeanor Tax Evasion - JUDICIAL DISCRETION": {
        "Type": "Misdemeanor",
        "Description": "An entity, individual and/or business who attempts to evade any tax imposed by the State of San Andreas under the value up to 20,000$ shall be found guilty of tax evasion and subject to penalty. If convicted under this provision, the entity shall be found subject to the immediate forfeiture and seizure of up to 33% of assets.",
        "Group": 2,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Misdemeanor Tax Evasion - JUDICIAL DISCRETION"
    },
    "Extortion": {
        "Type": "Felony",
        "Description": "The use of force or threats to compel another person to relinquish money or property or to compel a public officer or State employee to perform an official act within the course and scope of their employment.",
        "Group": 2,
        "Default": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1575,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1275,
            "Points": 0
        },
        "Name": "Extortion"
    },
    "Fraud": {
        "Type": "Felony",
        "Description": "Wrongfully deceits intending to receive financial or personal gain.",
        "Group": 2,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1050,
            "Points": 0
        },
        "Name": "Fraud"
    },
    "Impersonation": {
        "Type": "Felony",
        "Description": "Providing Law enforcement with a false, or fictitious name, while under detainment or under arrest.",
        "Group": 2,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1050,
            "Points": 0
        },
        "Name": "Impersonation"
    },
    "Impersonating a Peace Officer": {
        "Type": "Felony",
        "Description": "Any person who willfully wears, exhibits, or uses the authorized uniform, insignia, or emblem of a peace officer, or wears a uniform intended to parody or duplicate the authorized uniform of a peace officer and / or any person who willfully and fraudulently introduces the belief that he or she is a peace officer by attempting  to perform the duties of a peace officer upon others.",
        "Group": 2,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1575,
            "Points": 0
        },
        "Name": "Impersonating a Peace Officer"
    },
    "Impersonating a Judge": {
        "Type": "Felony",
        "Description": "Impersonates a Judge. Acting as a Judge or introducing themselves to others a judge and attempting to perform judicial duties.",
        "Group": 2,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1575,
            "Points": 0
        },
        "Name": "Impersonating a Judge"
    },
    "Vehicle Registration Fraud": {
        "Type": "Felony",
        "Description": "Person(s) displays a falsified license plate on a motor vehicle. Person(s) manufactures a falsified license plates.",
        "Group": 2,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Name": "Vehicle Registration Fraud"
    },
    "Identity Theft": {
        "Type": "Felony",
        "Description": "A person secures an undeserved financial benefit for themselves. Cause the victim to suffer a loss, which could be financial, emotional or some other type of damage. Escapes criminal liability by using another person's name, birth date or other identifying information.",
        "Group": 2,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1575,
            "Points": 0
        },
        "Name": "Identity Theft"
    },
    "Impersonating EMS": {
        "Type": "Felony",
        "Description": "Impersonates a member of EMS. Acting as EMS or introducing themselves to others as a member of EMS, and attempting to perform EMS duties.",
        "Group": 2,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1575,
            "Points": 0
        },
        "Name": "Impersonating EMS"
    },
    "Money Laundering": {
        "Type": "Felony",
        "Description": "The financial and/or property transaction(s) that aims to conceal the ultimate source of illegally obtained money and/or property in any amount. The State must prove that the origin of the money and/or property was obtain illegally.",
        "Group": 2,
        "Default": {
            "Time": 30,
            "Fine": 2825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 30,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 25,
            "Fine": 2250,
            "Points": 0
        },
        "Name": "Money Laundering"
    },
    "Felony Tax Evasion - Asset Freeze Pending Trial": {
        "Type": "Felony",
        "Description": "An entity, individual and/or business who attempts to evade any tax imposed by the State of San Andreas over the value of 20,000$ shall be found guilty of tax evasion and subject to penalty up to DOJ discretion at trial. If charged the immediate action taken will be asset freezing of the entity, individual and/or business -  especially any bank accounts involving the entity, individual and/or business. The asset(s) will be immediately audited by the DIC and District Attorney.",
        "Group": 2,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Felony Tax Evasion - Asset Freeze Pending Trial"
    },
    "Possession of a Tampered Firearm": {
        "Type": "Felony",
        "Description": "It is unlawful to be in possession of any \"scratched off\" or altered firearm. Firearm is found to have it's manufacturer's production serial number completely altered or removed from the weapon.",
        "Group": 2,
        "Default": {
            "Time": 30,
            "Fine": 3375,
            "Points": 0
        },
        "Name": "Possession of a Tampered Firearm"
    },
    "Witness Tampering": {
        "Type": "HUT",
        "Description": "The killing of, attempt to kill, use of physical force, threat of physical force, use of intimidation, or use of threats in an attempt to hinder, delay, or prevent, and individual from producing testimony or evidence before the Court or an attempt to alter or destroy the evidence or testimony to be produced.",
        "Group": 2,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Witness Tampering"
    },
    "Trespassing": {
        "Type": "Misdemeanor",
        "Description": "Enters knowingly or remains unlawfully upon a property without the permission or the right to do so.",
        "Group": 3,
        "Default": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 350,
            "Points": 0
        },
        "Name": "Trespassing"
    },
    "Burglary": {
        "Type": "Felony",
        "Description": "Any person who breaks and enters any property or attempts to break and enter into a property with the intent either to take and carry away property from within or to commit any misdemeanor or felony therein. See Case Law The People v. Brett Maxwell",
        "Group": 3,
        "Default": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Burglary"
    },
    "Felony Trespassing": {
        "Type": "Felony",
        "Description": "Enters knowingly or remains unlawfully in or upon a government property without permission or the right to do so. Includes power plants.",
        "Group": 3,
        "Default": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Felony Trespassing"
    },
    "Arson": {
        "Type": "Felony",
        "Description": "Person maliciously sets fire to a structure, forest land, or other property. To include the use of thermite at banks, vaults, or other locations.",
        "Group": 3,
        "Default": {
            "Time": 21,
            "Fine": 2375,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 2375,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1900,
            "Points": 0
        },
        "Name": "Arson"
    },
    "Contempt of Court": {
        "Type": "Misdemeanor",
        "Description": "The act of being disobedient to or discourteous towards a court of law and its officers in the form of behavior that opposes or defies the authority, justice and dignity of the court. Time/Fine is at Judge discretion.",
        "Group": 4,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Contempt of Court"
    },
    "Failure to Appear": {
        "Type": "Misdemeanor",
        "Description": "Failure to appear in Court when summoned. Judge discretion on time / fine.",
        "Group": 4,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Failure to Appear"
    },
    "Unauthorized Practice of Law": {
        "Type": "Misdemeanor",
        "Description": "Practices law without a proper bar certification.",
        "Group": 4,
        "Default": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 375,
            "Points": 0
        },
        "Name": "Unauthorized Practice of Law"
    },
    "Conspiracy": {
        "Type": "Misdemeanor",
        "Description": "A collaborative agreement between two or more individuals that enact in a process to commit a crime. This is done via verbal, written, or electric communication between individuals, with confirmation that the crime will be taking place.",
        "Group": 4,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 420,
            "Points": 0
        },
        "Name": "Conspiracy"
    },
    "Misuse of a 911 System": {
        "Type": "Misdemeanor",
        "Description": "Person makes a request for emergency response when no actual emergency exists, and when the caller does not have a good faith basis to request emergency assistance.",
        "Group": 4,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misuse of a 911 System"
    },
    "Unauthorized Sales": {
        "Type": "Misdemeanor",
        "Description": "Any person engaged in commerce without being employed within a registered business and/or without a sellers permit.",
        "Group": 4,
        "Default": {
            "Time": 0,
            "Fine": 1025,
            "Points": 0
        },
        "Name": "Unauthorized Sales"
    },
    "Bribery": {
        "Type": "Felony",
        "Description": "Confers, or agrees to confer, any benefit upon a public servant upon an agreement or understanding that such public servant's vote, opinion, judgement, action, decision or exercise of discretion as a public servant will thereby be influenced.",
        "Group": 4,
        "Default": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1125,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 900,
            "Points": 0
        },
        "Name": "Bribery"
    },
    "Escaping Custody": {
        "Type": "Felony",
        "Description": "Escapes the custody of law enforcement once that person has been, detained / arrested but before processing occurs.",
        "Group": 4,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1325,
            "Points": 0
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1075,
            "Points": 0
        },
        "Name": "Escaping Custody"
    },
    "Prison Break": {
        "Type": "Felony",
        "Description": "Breaks into government buildings, vehicles designated for detainment, or imprisonment with intent to break a prisoner out. Steals a law enforcement vehicle intending to transport an individual/individuals to prison after processing has occurred. Includes the act of an inmate or suspect leaving prison through unofficial or illegal  ways.",
        "Group": 4,
        "Default": {
            "Time": 40,
            "Fine": 6000,
            "Points": 0
        },
        "Accomplice": {
            "Time": 40,
            "Fine": 6000,
            "Points": 0
        },
        "Accessory": {
            "Time": 32,
            "Fine": 5250,
            "Points": 0
        },
        "Name": "Prison Break"
    },
    "Perjury": {
        "Type": "Felony",
        "Description": "Knowingly lies under oath in judicial proceedings. This lie must be proven after the case to have impacted the outcome. A person convicted of Perjury will have any future testimony in court greatly diminished with regards to reliability.",
        "Group": 4,
        "Default": {
            "Time": 21,
            "Fine": 3150,
            "Points": 0
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 3150,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 2675,
            "Points": 0
        },
        "Name": "Perjury"
    },
    "Violating a Court Order": {
        "Type": "Felony",
        "Description": "Willful disobedience of the terms written in a court order. To include a sentence imposed on a citizen, protective, and restraining orders.",
        "Group": 4,
        "Default": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accomplice": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accessory": {
            "Time": 23,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Violating a Court Order"
    },
    "Embezzlement": {
        "Type": "Felony",
        "Description": "The fraudulent appropriation of finances by an employee of a business or a government employee. This includes the use of assets or finances for unofficial, personal, or criminal purposes.",
        "Group": 4,
        "Default": {
            "Time": 50,
            "Fine": 7500,
            "Points": 0
        },
        "Accomplice": {
            "Time": 50,
            "Fine": 7500,
            "Points": 0
        },
        "Accessory": {
            "Time": 17,
            "Fine": 5625,
            "Points": 0
        },
        "Name": "Embezzlement"
    },
    "Attempted Prison Break": {
        "Type": "Felony",
        "Description": "The attempt to break into government buildings, vehicles designated for detainment, or imprisonment with intent to break a prisoner out. Attempts to steal a law enforcement vehicle which is intended by police to be used to transport an individual / individuals to prison after processing has occurred. Includes the act of an inmate or suspect attempting to leave prison through unofficial or illegal ways.",
        "Group": 4,
        "Default": {
            "Time": 28,
            "Fine": 4200,
            "Points": 0
        },
        "Accomplice": {
            "Time": 28,
            "Fine": 4200,
            "Points": 0
        },
        "Accessory": {
            "Time": 23,
            "Fine": 3675,
            "Points": 0
        },
        "Name": "Attempted Prison Break"
    },
    "Parole Violation": {
        "Type": "Felony",
        "Description": "Person who violates their parole time, set by their previous arrest. This is just a marker for their criminal record. This is NOT a Held Until Trial.",
        "Group": 4,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Parole Violation"
    },
    "Introducing Contraband Into a Government Facility": {
        "Type": "Felony",
        "Description": "It is unlawful to introduce contraband into or upon the grounds of Bolingbroke Penitentiary, and Parsons Mental Health Facility. Contraband for the purposes of this charge only, shall be defined as any weapon, drug, intoxicating beverage, explosive device, radio, phone, written or recording device to be used to transmit information, and any item marked for police seizure.",
        "Group": 4,
        "Default": {
            "Time": 20,
            "Fine": 1875,
            "Points": 0
        },
        "Accomplice": {
            "Time": 20,
            "Fine": 1875,
            "Points": 0
        },
        "Accessory": {
            "Time": 16,
            "Fine": 1550,
            "Points": 0
        },
        "Name": "Introducing Contraband Into a Government Facility"
    },
    "Disobeying a Peace Officer": {
        "Type": "Misdemeanor",
        "Description": "Willfully refusing or failing to comply with a lawful order, signal, or direction of any peace officer.",
        "Group": 5,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 420,
            "Points": 0
        },
        "Name": "Disobeying a Peace Officer"
    },
    "Disorderly Conduct": {
        "Type": "Misdemeanor",
        "Description": "Engages in behavior intending to cause public inconvenience.",
        "Group": 5,
        "Default": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 350,
            "Points": 0
        },
        "Name": "Disorderly Conduct"
    },
    "Disturbing the Peace": {
        "Type": "Misdemeanor",
        "Description": "Unlawfully fighting, or challenging another person to fight, in a public place. Disturbing another person by loud and unreasonable noise; if this is done willfully and maliciously. Using offensive words in a public place, if the words are likely to provoke an immediate violent reaction.",
        "Group": 5,
        "Default": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 400,
            "Points": 0
        },
        "Name": "Disturbing the Peace"
    },
    "False Reporting": {
        "Type": "Misdemeanor",
        "Description": "Reports a false or non-existent crime.",
        "Group": 5,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 420,
            "Points": 0
        },
        "Name": "False Reporting"
    },
    "Harassment": {
        "Type": "Misdemeanor",
        "Description": "Intimidates or pressures another person aggressively with unwelcome words, deeds, actions, or gestures.",
        "Group": 5,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 420,
            "Points": 0
        },
        "Name": "Harassment"
    },
    "Misdemeanor Obstruction of Justice": {
        "Type": "Misdemeanor",
        "Description": "Recklessly or with criminal negligence hinders the discovery, apprehension, conviction, or punishment of a person who committed a crime, including issuing threats of violence, impeding the administration of justice, or withholding of non-privileged information or evidence from peace officers.",
        "Group": 5,
        "Default": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1000,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 850,
            "Points": 0
        },
        "Name": "Misdemeanor Obstruction of Justice"
    },
    "Vandalism": {
        "Type": "Misdemeanor",
        "Description": "Intentionally causing damage to property they do not own.",
        "Group": 5,
        "Default": {
            "Time": 0,
            "Fine": 275,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 275,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 200,
            "Points": 0
        },
        "Name": "Vandalism"
    },
    "Evidence Tampering": {
        "Type": "Misdemeanor",
        "Description": "The act of destroying, concealing, or removing a piece of evidence with the purpose of hiding the truth or making an item unavailable for an ongoing investigation or judicial proceeding.",
        "Group": 5,
        "Default": {
            "Time": 7,
            "Fine": 2250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 2250,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 1875,
            "Points": 0
        },
        "Name": "Evidence Tampering"
    },
    "Vandalism of Government Property": {
        "Type": "Misdemeanor",
        "Description": "Intentionally causing damage to Government Property totaling less than $1000.",
        "Group": 5,
        "Default": {
            "Time": 5,
            "Fine": 1000,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 1000,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 675,
            "Points": 0
        },
        "Name": "Vandalism of Government Property"
    },
    "Stalking": {
        "Type": "Misdemeanor",
        "Description": "The following, harassing, threatening of another person, to the point where an individual fears for his/her safety.",
        "Group": 5,
        "Default": {
            "Time": 7,
            "Fine": 275,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 275,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 225,
            "Points": 0
        },
        "Name": "Stalking"
    },
    "Riot": {
        "Type": "Felony",
        "Description": "Any person who, while acting as part of a group of four or more individuals, engages in willful disorderly conduct in a public setting that turns violent. This should not be added to other underlying felonious motivations, such as Robbery or a Gang-Related Shooting.",
        "Group": 5,
        "Default": {
            "Time": 18,
            "Fine": 2025,
            "Points": 0
        },
        "Accomplice": {
            "Time": 18,
            "Fine": 2025,
            "Points": 0
        },
        "Accessory": {
            "Time": 15,
            "Fine": 1675,
            "Points": 0
        },
        "Name": "Riot"
    },
    "Disruption of a Public Utility": {
        "Type": "Felony",
        "Description": "The attempt, or successful execution of the disruption of any electrical power grid.",
        "Group": 5,
        "Default": {
            "Time": 28,
            "Fine": 3150,
            "Points": 0
        },
        "Accomplice": {
            "Time": 28,
            "Fine": 3150,
            "Points": 0
        },
        "Accessory": {
            "Time": 23,
            "Fine": 2675,
            "Points": 0
        },
        "Name": "Disruption of a Public Utility"
    },
    "Felony Obstruction of Justice": {
        "Type": "Felony",
        "Description": "Intentionally hinders the discovery, apprehension, conviction, or punishment of a person who committed a crime, including intentionally involving oneself in an ongoing or investigation in such a way that peace officers are impeded from administering justice.",
        "Group": 5,
        "Default": {
            "Time": 24,
            "Fine": 2250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 24,
            "Fine": 2250,
            "Points": 0
        },
        "Accessory": {
            "Time": 20,
            "Fine": 1875,
            "Points": 0
        },
        "Name": "Felony Obstruction of Justice"
    },
    "Destruction of Government Property": {
        "Type": "Felony",
        "Description": "Intentionally causing damage to Government Property totaling $1000 or more. Any individual found guilty of this crime will be billed the $1000 fine plus the cost of repairing the government property to a like new status.",
        "Group": 5,
        "Default": {
            "Time": 10,
            "Fine": 1500,
            "Points": 0
        },
        "Name": "Destruction of Government Property"
    },
    "Misdemeanor Possession of Crack": {
        "Type": "Misdemeanor",
        "Description": "Possesses up to 50 grams (10 bags @ 5g per bag) of Crack Cocaine.",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Crack"
    },
    "Misdemeanor Possession of Cocaine": {
        "Type": "Misdemeanor",
        "Description": "Possesses up to 50 grams (10 bags @ 5g per bag) of Cocaine.",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Cocaine"
    },
    "Misdemeanor Possession of Marijuana": {
        "Type": "Misdemeanor",
        "Description": "Possesses any amount of Marijuana between 1 to 4 ounces, or between 28 grams and 113 grams of Marijuana.",
        "Group": 6,
        "Default": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Marijuana"
    },
    "Misdemeanor Possession of Controlled Dangerous Substance OXY / METH": {
        "Type": "Misdemeanor",
        "Description": "Possesses up to 15 units of Oxy or Methamphetamine without prescription from a medical professional.",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Controlled Dangerous Substance OXY / METH"
    },
    "Possession of Drug Paraphernalia": {
        "Type": "Misdemeanor",
        "Description": "Any item that is used in the manufacturing, production, distribution, sale, or consumption of drugs.",
        "Group": 6,
        "Default": {
            "Time": 5,
            "Fine": 425,
            "Points": 0
        },
        "Name": "Possession of Drug Paraphernalia"
    },
    "Littering": {
        "Type": "Misdemeanor",
        "Description": "The act of throwing objects on the ground in a disobedient manner. Leaving trash and other items on the ground.",
        "Group": 6,
        "Default": {
            "Time": 0,
            "Fine": 275,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 275,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 200,
            "Points": 0
        },
        "Name": "Littering"
    },
    "Public Intoxication": {
        "Type": "Misdemeanor",
        "Description": "A person who is under the influence of Alcohol or a Controlled Dangerous Substance, in a public place.",
        "Group": 6,
        "Default": {
            "Time": 0,
            "Fine": 175,
            "Points": 0
        },
        "Name": "Public Intoxication"
    },
    "Public Indecency": {
        "Type": "Misdemeanor",
        "Description": "A lewd caress or indecent fondling of the body. Public place shall include jails, and correctional institutions of",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Public Indecency"
    },
    "Practicing Medicine Without a License": {
        "Type": "Misdemeanor",
        "Description": "Practicing medicine without a proper license. Treating citizens for any medical, or health related issue without proper documentation. Law Enforcement is exempt only during their qualified duties.",
        "Group": 6,
        "Default": {
            "Time": 12,
            "Fine": 1250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1250,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 1025,
            "Points": 0
        },
        "Name": "Practicing Medicine Without a License"
    },
    "Misdemeanor Possession of LSD tabs": {
        "Type": "Misdemeanor",
        "Description": "Possesses up to 10 LSD tabs.",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of LSD tabs"
    },
    "Misdemeanor Possession of Moonshine": {
        "Type": "Misdemeanor",
        "Description": "Possesses a produced or manufactured substance known as Moonshine up to 15 units.",
        "Group": 6,
        "Default": {
            "Time": 9,
            "Fine": 750,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Moonshine"
    },
    "Misdemeanor Possession of Controlled Dangerous Substance KETAMINE": {
        "Type": "Misdemeanor",
        "Description": "Possesses up to 15 units of Ketamine without a prescription from a medical professional.",
        "Group": 6,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Controlled Dangerous Substance KETAMINE"
    },
    "Misdemeanor Possession of Metamorphine": {
        "Type": "Misdemeanor",
        "Description": "Possesses 1 to 3 units of controlled dangerous substance Metamorphine.",
        "Group": 6,
        "Default": {
            "Time": 5,
            "Fine": 1225,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Metamorphine"
    },
    "Misdemeanor Possession of Thermite Charge": {
        "Type": "Misdemeanor",
        "Group": 6,
        "Default": {
            "Time": 14,
            "Fine": 1650,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Thermite Charge"
    },
    "Possession of Unknown Prescription Medication - Misdemeanor": {
        "Type": "Misdemeanor",
        "Description": "Person is found to be in possession of an Unknown Prescription. These bottles can be found in a variant in shape and color. Person is found to be in possession of 1 to 4 bottles of pills.",
        "Group": 6,
        "Default": {
            "Time": 10,
            "Fine": 1075,
            "Points": 0
        },
        "Name": "Possession of Unknown Prescription Medication - Misdemeanor"
    },
    "Sale of Marijuana Seeds": {
        "Type": "Misdemeanor",
        "Group": 6,
        "Default": {
            "Time": 12,
            "Fine": 1350,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1350,
            "Points": 0
        },
        "Accessory": {
            "Time": 9,
            "Fine": 1000,
            "Points": 0
        },
        "Name": "Sale of Marijuana Seeds"
    },
    "Sale of Drugs": {
        "Type": "Felony",
        "Description": "Sale of controlled dangerous substance. This includes Cocaine, Crack Cocaine, Oxy, Methamphetamine, LSD Tabs, Marijuana, Ketamine, Metamorphine, and Unknown Prescription Medication. Engages in a transaction to sell and / or receive a controlled dangerous substance as defined above.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accomplice": {
            "Time": 25,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 20,
            "Fine": 2500,
            "Points": 0
        },
        "Name": "Sale of Drugs"
    },
    "Felony Possession of Marijuana": {
        "Type": "Felony",
        "Description": "Possesses any amount of Marijuana greater than 4 ounces, or greater than 113 grams of Marijuana.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Marijuana"
    },
    "Felony Possession of Cocaine": {
        "Type": "Felony",
        "Description": "Possessing 50+ grams (10 bags @ 5g per bag) of Cocaine.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Cocaine"
    },
    "Felony Possession of Crack Cocaine": {
        "Type": "Felony",
        "Description": "Possesses 50+ grams (10 bags @ 5g per bag) of Crack Cocaine.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Crack Cocaine"
    },
    "Felony Possession of Controlled Dangerous Substance OXY / METH": {
        "Type": "Felony",
        "Description": "Possesses more than 15 units of Oxy or Methamphetamine without a prescription from a medical professional.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Controlled Dangerous Substance OXY / METH"
    },
    "Felony Possession with intent to Distribute": {
        "Type": "Felony",
        "Description": "Any person who is found to have large quantities of drugs on their person, vehicle, and or property with intent to distribute. Intent to distribute can be inferred through circumstances surrounding the discovery of the drugs or a pattern of behavior of the suspect such as large sums of money, high-grade weaponry, or other paraphernalia used in the measuring/weighing or breaking down of large quantities to smaller quantities",
        "Group": 6,
        "Default": {
            "Time": 150,
            "Fine": 24500,
            "Points": 0
        },
        "Accomplice": {
            "Time": 150,
            "Fine": 24500,
            "Points": 0
        },
        "Accessory": {
            "Time": 120,
            "Fine": 19600,
            "Points": 0
        },
        "Name": "Felony Possession with intent to Distribute"
    },
    "Desecration of a Human Corpse": {
        "Type": "Felony",
        "Description": "Desecration of a human corpse means any act committed after the death of a human being including, but not limited to, dismemberment, disfigurement, mutilation, burning, or any act committed to cause the dead body to be devoured, scattered or dissipated; except, those procedures performed by a state agency or licensed authority in due course of its duties and responsibilities. This includes the removal of a corpse from the custody of the morgue.",
        "Group": 6,
        "Default": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Accomplice": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Accessory": {
            "Time": 15,
            "Fine": 1275,
            "Points": 0
        },
        "Name": "Desecration of a Human Corpse"
    },
    "Felony Possession of LSD Tabs": {
        "Type": "Felony",
        "Description": "Possesses 11 or more LSD tabs.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of LSD Tabs"
    },
    "Illegal Exhumation": {
        "Type": "Felony",
        "Description": "The removal of a body without authorization from where it lies in state, or it's final resting place.",
        "Group": 6,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Illegal Exhumation"
    },
    "Drug Trafficking": {
        "Type": "Felony",
        "Description": "Any person who is found guilty of Felony Possession with Intent to Distribute and which meets one or more of the following requirements: (1) The suspect shows a pattern of drug distribution or felony possession of controlled dangerous substances, demonstrable through three or more provable instances. (2)Proof or evidence that the suspect has manufactured or cultivated a controlled dangerous substance; (3)The suspect has sold, transferred, or distributed a controlled dangerous substance to an individual who may be summoned or subpoenaed to appear in court.",
        "Group": 6,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Drug Trafficking"
    },
    "Human Trafficking": {
        "Type": "Felony",
        "Description": "The unlawful act of transporting individuals under threat of deadly force with the intent to compel them to perform an act of manual labor or a service for an extended period of time under duress. Factors of this crime include actual violence exercised against the person to maintain their compliance and the extended duration or continuous nature of the imprisonment. Alternatively, the kidnapping and transportation of a human being  with the intent to sell the kidnapped individual to another.",
        "Group": 6,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Human Trafficking"
    },
    "Prostitution": {
        "Type": "Felony",
        "Description": "Engaging in sexual activity with someone for payment or aiding in the act of prostitution by providing an individual with the means to the successful sale of sexual activity.",
        "Group": 6,
        "Default": {
            "Time": 70,
            "Fine": 6250,
            "Points": 0
        },
        "Accomplice": {
            "Time": 70,
            "Fine": 6250,
            "Points": 0
        },
        "Accessory": {
            "Time": 56,
            "Fine": 5175,
            "Points": 0
        },
        "Name": "Prostitution"
    },
    "Felony Possession of Human Remains": {
        "Type": "Felony",
        "Description": "Possessing either the vital organs or detached body parts of another person. Person is not a working medical professional on the grounds of dedicated hospitals or mortuaries.",
        "Group": 6,
        "Default": {
            "Time": 30,
            "Fine": 2825,
            "Points": 0
        },
        "Accessory": {
            "Time": 5,
            "Fine": 500,
            "Points": 0
        },
        "Name": "Felony Possession of Human Remains"
    },
    "Felony Possession of Moonshine": {
        "Type": "Felony",
        "Description": "Possesses a produced or manufactured substance known as Moonshine above 15 units.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Moonshine"
    },
    "Felony Possession of Controlled Dangerous Substance KETAMINE": {
        "Type": "Felony",
        "Description": "Possesses more than 15 units of Ketamine without a prescription from a medical professional.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Controlled Dangerous Substance KETAMINE"
    },
    "Cultivation of marijuana": {
        "Type": "Felony",
        "Description": "Any person or persons found in the constructive possession of any quantity of unprocessed (wet) cannabis; or  individual is found to be in constructive possession of any quantity of bud producing cannabis plants. (1) Any  individual who is observed in the vicinity of growing plants constitutes probable cause that an individual is in constructive possession.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Accomplice": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Accessory": {
            "Time": 20,
            "Fine": 1950,
            "Points": 0
        },
        "Name": "Cultivation of marijuana"
    },
    "Felony Possession of Metamorphine": {
        "Type": "Felony",
        "Description": "Possesses 4 or more units of controlled dangerous substance Metamorphine.",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Felony Possession of Metamorphine"
    },
    "Felony Possession of Thermite": {
        "Type": "Felony",
        "Description": "Person possesses 5 or more Thermite Charges.",
        "Group": 6,
        "Default": {
            "Time": 22,
            "Fine": 2825,
            "Points": 0
        },
        "Name": "Felony Possession of Thermite"
    },
    "Possession of Unknown Prescription Medicine - Felony": {
        "Type": "Felony",
        "Description": "Person is found to be in possession of an Unknown Prescription. These bottles can be found in a variant in shape and color. Person is found to be in possession of an amount of 5 or more",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2350,
            "Points": 0
        },
        "Name": "Possession of Unknown Prescription Medicine - Felony"
    },
    "Felony Possession of Heroin": {
        "Type": "Felony",
        "Group": 6,
        "Default": {
            "Time": 25,
            "Fine": 2750,
            "Points": 0
        },
        "Name": "Felony Possession of Heroin"
    },
    "Criminal Possession of a Firearm [Class 1]": {
        "Type": "Misdemeanor",
        "Description": "Possess a weapon without a proper license or a weapon which is not registered to the individual possessing it.",
        "Group": 7,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Criminal Possession of a Firearm [Class 1]"
    },
    "Criminal Use of a Firearm": {
        "Type": "Misdemeanor",
        "Description": "Discharges a firearm for no legal reason, or using a firearm in the commission to aid in a crime.",
        "Group": 7,
        "Default": {
            "Time": 7,
            "Fine": 800,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 800,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 675,
            "Points": 0
        },
        "Name": "Criminal Use of a Firearm"
    },
    "Brandishing non Firearm": {
        "Type": "Misdemeanor",
        "Description": "It is unlawful for you to draw or exhibit a deadly weapon in a rude, angry, or threatening way in the presence of another person and not in defense of self or others",
        "Group": 7,
        "Default": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 350,
            "Points": 0
        },
        "Name": "Brandishing non Firearm"
    },
    "Resisting Arrest": {
        "Type": "Misdemeanor",
        "Description": "Flees from a Peace Officer to avoid being apprehended, or arrested while on foot, or a passenger in a vehicle.",
        "Group": 7,
        "Default": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accomplice": {
            "Time": 5,
            "Fine": 475,
            "Points": 0
        },
        "Accessory": {
            "Time": 4,
            "Fine": 350,
            "Points": 0
        },
        "Name": "Resisting Arrest"
    },
    "Jaywalking": {
        "Type": "Misdemeanor",
        "Description": "Crosses a road without the use of a crosswalk, or without a marked crossing light.",
        "Group": 7,
        "Default": {
            "Time": 0,
            "Fine": 175,
            "Points": 0
        },
        "Name": "Jaywalking"
    },
    "Criminal Possession of a Government Issued Baton": {
        "Type": "Misdemeanor",
        "Description": "It is illegal to possess a government-owned or issued Baton, without being a duly sworn Peace Officer who is currently on-duty or off duty. This includes the Batons that Law Enforcement Officers purchase for their sworn daily duties.",
        "Group": 7,
        "Default": {
            "Time": 7,
            "Fine": 650,
            "Points": 0
        },
        "Name": "Criminal Possession of a Government Issued Baton"
    },
    "Criminal Possession of a Firearm [Class 2]": {
        "Type": "Felony",
        "Description": "Possesses an illegal Class 2 Firearm or an MP5 without a license. A Class 2 Firearm is defined as any shotgun or automatic firearm.",
        "Group": 7,
        "Default": {
            "Time": 28,
            "Fine": 4250,
            "Points": 0
        },
        "Name": "Criminal Possession of a Firearm [Class 2]"
    },
    "Criminal Possession of a Government-Issue Firearm": {
        "Type": "Felony",
        "Description": "It is illegal to possess a government-owned or issued firearm, without being a duly sworn Peace Office who is currently on-duty or off duty. This includes the firearms that Law Enforcement Officers purchase for their sworn daily duties.",
        "Group": 7,
        "Default": {
            "Time": 210,
            "Fine": 45000,
            "Points": 0
        },
        "Name": "Criminal Possession of a Government-Issue Firearm"
    },
    "Criminal Possession of a Firearm [Class 3]": {
        "Type": "Felony",
        "Description": "Possesses a Class 3 weapon. LMG, RPG, DMR's Excluding hunting rifle purchased at the sporting and survival store in Paleto.",
        "Group": 7,
        "Default": {
            "Time": 35,
            "Fine": 5250,
            "Points": 0
        },
        "Name": "Criminal Possession of a Firearm [Class 3]"
    },
    "Possession of Explosives": {
        "Type": "Felony",
        "Description": "Possesses explosives on his or her person. Includes transport of explosives.",
        "Group": 7,
        "Default": {
            "Time": 45,
            "Fine": 10000,
            "Points": 0
        },
        "Name": "Possession of Explosives"
    },
    "Criminal Sale of a Firearm [Class 1]": {
        "Type": "Felony",
        "Description": "The unlawful sale, or purchase of a Class 1 firearm.",
        "Group": 7,
        "Default": {
            "Time": 12,
            "Fine": 1350,
            "Points": 0
        },
        "Accomplice": {
            "Time": 12,
            "Fine": 1350,
            "Points": 0
        },
        "Accessory": {
            "Time": 10,
            "Fine": 1025,
            "Points": 0
        },
        "Name": "Criminal Sale of a Firearm [Class 1]"
    },
    "Criminal Sale of an illegal weapon": {
        "Type": "Felony",
        "Description": "The unlawful sale, or purchase, of a Class 2 or Class 3 Weapon.",
        "Group": 7,
        "Default": {
            "Time": 35,
            "Fine": 3950,
            "Points": 0
        },
        "Accomplice": {
            "Time": 35,
            "Fine": 3950,
            "Points": 0
        },
        "Accessory": {
            "Time": 28,
            "Fine": 3150,
            "Points": 0
        },
        "Name": "Criminal Sale of an illegal weapon"
    },
    "Weapons Trafficking": {
        "Type": "Felony",
        "Description": "The unlawful transportation of a large quantity of Class 1, Class 2, Class 3 firearms, molotov cocktails, and/or a rocket propelled grenade launchers, with the intent to distribute. Intent to distribute can be inferred through circumstances surrounding the discovery of the firearms or a pattern of behavior of the suspects, including large sums of money, and/or the possession of six or more firearms.",
        "Group": 7,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Weapons Trafficking"
    },
    "Flying into Restricted Airspace": {
        "Type": "Felony",
        "Description": "The unauthorized flight into, or landing in restricted airspace. The restricted areas are as follows. Aircraft carrier, any and all power plants, Fort Zancudo. This includes landing on Pillbox Medical Center, and any Law Enforcement building or property. Certified pilots will lose their license for any of the above listed. LEO and EMS are exempt.",
        "Group": 7,
        "Default": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accomplice": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accessory": {
            "Time": 23,
            "Fine": 2150,
            "Points": 0
        },
        "Name": "Flying into Restricted Airspace"
    },
    "Piloting Without a Proper License": {
        "Type": "Felony",
        "Description": "Operating (or attempting to operate) an aircraft without the proper license. This includes, Helicopters, and Fixed Wing Aircraft.",
        "Group": 7,
        "Default": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accomplice": {
            "Time": 28,
            "Fine": 2625,
            "Points": 0
        },
        "Accessory": {
            "Time": 23,
            "Fine": 2150,
            "Points": 0
        },
        "Name": "Piloting Without a Proper License"
    },
    "Criminal Possession of Government-issued Taser": {
        "Type": "Felony",
        "Description": "It is illegal to possess a government-owned or issued Taser, without being duly sworn Peace Officer who is currently on-duty or off duty. This includes that Law Enforcement Officers purchase for their sworn daily duties.",
        "Group": 7,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 0
        },
        "Name": "Criminal Possession of Government-issued Taser"
    },
    "Possession of Weapon Attachments": {
        "Type": "Felony",
        "Group": 7,
        "Default": {
            "Time": 10,
            "Fine": 1125,
            "Points": 0
        },
        "Name": "Possession of Weapon Attachments"
    },
    "Possession of a Molotov": {
        "Type": "Felony",
        "Description": "Person possesses a Molotov and / or Moly device.",
        "Group": 7,
        "Default": {
            "Time": 35,
            "Fine": 3300,
            "Points": 0
        },
        "Name": "Possession of a Molotov"
    },
    "Criminal Use of Explosives": {
        "Type": "Felony",
        "Description": "Intentionally placing, using, or attempting to use explosives against any person or property. This shall include tanker trucks, cars ignited in gasoline, or tanks / barrels full of combustible liquid for the purpose of causing an explosion. This charge may be issued in addition to Attempted Murder.",
        "Group": 7,
        "Default": {
            "Time": 45,
            "Fine": 25000,
            "Points": 2
        },
        "Accomplice": {
            "Time": 45,
            "Fine": 25000,
            "Points": 0
        },
        "Accessory": {
            "Time": 28,
            "Fine": 22750,
            "Points": 0
        },
        "Name": "Criminal Use of Explosives"
    },
    "Criminal Possession of a Government Issued Equipment": {
        "Type": "Felony",
        "Description": "It is illegal to possess any government-owned or police-issued equipment without being on duty as a State  employee, or approved person tagged within the MDW. Specifically, this covers any of the following: Taser Cartridges,IFAks, PD Watch & Compass, Spike Strips, Adrenaline Syringes, Stun/Smoke Grenades, EMP Cartridges and Detonation Cords.",
        "Group": 7,
        "Default": {
            "Time": 15,
            "Fine": 1425,
            "Points": 0
        },
        "Name": "Criminal Possession of a Government Issued Equipment"
    },
    "Criminal Possession of a Civilian Class 2 Firearm": {
        "Type": "Felony",
        "Description": "Possesses a Civilian Class 2 Firearm not registered to them. Possesses a Civilian Class 2 Firearm without a valid license.",
        "Group": 7,
        "Default": {
            "Time": 210,
            "Fine": 45000,
            "Points": 0
        },
        "Name": "Criminal Possession of a Civilian Class 2 Firearm"
    },
    "Stockpiling": {
        "Type": "Felony",
        "Group": 7,
        "Default": {
            "Time": 250,
            "Fine": 100000,
            "Points": 0
        },
        "Name": "Stockpiling"
    },
    "Terrorism": {
        "Type": "HUT",
        "Description": "The unlawful use of Extreme Violence and Intimidation against the Civilian Population that would pursue political aims, compromise medical neutrality, or in the name of religious ideology. The unlawful use of Extreme Violence and Intimidation against Government Entities that would pursue the disruption, destabilization or destruction of those entities for political or religious aims.",
        "Group": 7,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 2
        },
        "Accomplice": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Accessory": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Terrorism"
    },
    "Harboring a Fugitive": {
        "Type": "HUT",
        "Description": "Whoever knowingly harbors or conceals any prisoner wanted for a capital level offense after their escape from custody of Bolingbroke State Penitentiary or any other State correctional institution shall be guilty of this offense. This offense shall include but not be limited to providing residence for the prisoner, assisting the  prisoner in escape from the authorities, and/or failing to notify the proper authorities of the prisoner's location if the suspect should reasonably know the prisoner is wanted for arrest on capital level offenses.",
        "Group": 7,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Harboring a Fugitive"
    },
    "Treason": {
        "Type": "HUT",
        "Description": "Whoever engages in and/or incites others to participate in rebellion or insurrection against the authority of the State of San Andreas. The Authority of the State of San Andreas shall be considered for the purpose of this statute to include the Senate and/or the laws of the State. This shall include anyone who attempts to secede from the State by way of sovereign land claims or annexation.",
        "Group": 7,
        "Default": {
            "Time": 0,
            "Fine": 0,
            "Points": 0
        },
        "Name": "Treason"
    },
    "Driving While Intoxicated": {
        "Type": "Misdemeanor",
        "Description": "Drives while affected by drug or alcohol intoxication. Licenses is suspended.",
        "Group": 8,
        "Default": {
            "Time": 5,
            "Fine": 475,
            "Points": 20
        },
        "Name": "Driving While Intoxicated"
    },
    "Hit and Run": {
        "Type": "Misdemeanor",
        "Description": "Leaving a scene of an accident with property damage, without identifying yourself to the parties involved.",
        "Group": 8,
        "Default": {
            "Time": 7,
            "Fine": 675,
            "Points": 2
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 675,
            "Points": 2
        },
        "Accessory": {
            "Time": 6,
            "Fine": 525,
            "Points": 2
        },
        "Name": "Hit and Run"
    },
    "Evading": {
        "Type": "Misdemeanor",
        "Description": "Flees from a Peace Officer in a vehicle to avoid being apprehended, detained, or arrested.",
        "Group": 8,
        "Default": {
            "Time": 19,
            "Fine": 1800,
            "Points": 0
        },
        "Accomplice": {
            "Time": 19,
            "Fine": 1800,
            "Points": 0
        },
        "Accessory": {
            "Time": 5,
            "Fine": 1250,
            "Points": 0
        },
        "Name": "Evading"
    },
    "Failure to Yield to Emergency Vehicle": {
        "Type": "Misdemeanor",
        "Description": "Does not pull to the side of the road when an emergency vehicle is trying to pass with sirens and / or lights enabled. Adds 1 point.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 225,
            "Points": 1
        },
        "Name": "Failure to Yield to Emergency Vehicle"
    },
    "Failure to Obey Traffic Control Devices": {
        "Type": "Misdemeanor",
        "Description": "Does not obey a sign or signal defined as regulatory. Adds 1 point.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 225,
            "Points": 1
        },
        "Name": "Failure to Obey Traffic Control Devices"
    },
    "Negligent Driving": {
        "Type": "Misdemeanor",
        "Description": "Drives in a way that is negligent with no regard to basic traffic rules.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 2
        },
        "Name": "Negligent Driving"
    },
    "Third Degree Speeding": {
        "Type": "Misdemeanor",
        "Description": "Drives in excess of the speed limit by up to 35 miles per hour. Adds 1 point.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 1
        },
        "Name": "Third Degree Speeding"
    },
    "Second Degree Speeding": {
        "Type": "Misdemeanor",
        "Description": "Drives in excess of the speed limit by at least 36 miles per hour, up to 55 miles per hour. Adds 2 points.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 750,
            "Points": 2
        },
        "Name": "Second Degree Speeding"
    },
    "First Degree Speeding": {
        "Type": "Misdemeanor",
        "Description": "Drives in excess of the speed limit by more than 55 miles per hour. Adds 3 points.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 1125,
            "Points": 3
        },
        "Name": "First Degree Speeding"
    },
    "Illegal Passing": {
        "Type": "Misdemeanor",
        "Description": "Passing another vehicle by a shoulder, median, or solid lines. Passing must be completely mad without interfering with safe operation of any approaching vehicle from the opposite direction.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 1
        },
        "Name": "Illegal Passing"
    },
    "Driving on the Wrong Side of The Road": {
        "Type": "Misdemeanor",
        "Description": "Driving on the left side of the road, against opposing traffic.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 1
        },
        "Name": "Driving on the Wrong Side of The Road"
    },
    "Illegal Turn": {
        "Type": "Misdemeanor",
        "Description": "Performing a turn at a stop sign or red light without coming to a full and complete stop, or failure to yield to pedestrians. Making a left-hand turn where signs posted prohibit such a turn. Adds 1 point.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 1
        },
        "Name": "Illegal Turn"
    },
    "Failure to Stop": {
        "Type": "Misdemeanor",
        "Description": "Failure to come to a complete and full stop at a posted stop sign or red light. Right on red is permitted when a full stop is completed and after yielding to traffic and pedestrians. Adds 1 point.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 1
        },
        "Name": "Failure to Stop"
    },
    "Unauthorized Parking": {
        "Type": "Misdemeanor",
        "Description": "Parks in an area that is unsafe or on government property. Parking on a sidewalk, to include ANY portion of the tire touching the curb. Parking in the wrong direction of traffic. Parking on a red line. Parking in front of a fire hydrant. Parking vehicle across multiple parking spaces. Vehicle is subject to tow. Government vehicles with lights and/or sirens on are exempt from this statute. Further, a vehicle may be driven onto a curb or sidewalk for the purpose of immediately parking that vehicle within a garage.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Unauthorized Parking"
    },
    "Operating a Motor Vehicle Without Proper Identification": {
        "Type": "Misdemeanor",
        "Description": "Person has a valid license but is unable to provide a valid citizen identification to law enforcement upon request. Person must present their physical identification to law enforcement. Vehicle is to be impounded by law enforcement. This law is to ensure that citizens provide proper identification to law enforcement while operating a motor vehicle.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 375,
            "Points": 2
        },
        "Name": "Operating a Motor Vehicle Without Proper Identification"
    },
    "Unauthorized Operation of an Off-Road Vehicle": {
        "Type": "Misdemeanor",
        "Description": "It is unlawful to operate an off-road vehicle on city streets, highways, county roads, and sidewalks. Off-road vehicles are classified as ATV's, Dirt Bikes, Farm Tractors, Golf Carts, and Dune Buggies that don't have a visible license plate displayed. Officer may use discretion if the person is transporting from PDM after purchasing. Adds 2 points.",
        "Group": 8,
        "Default": {
            "Time": 10,
            "Fine": 1125,
            "Points": 2
        },
        "Name": "Unauthorized Operation of an Off-Road Vehicle"
    },
    "Improper Window Tint": {
        "Type": "Misdemeanor",
        "Description": "Operating a vehicle with tint that obscures the view from the outside. Window tint must be completely dark to where Law Enforcement can't see citizens in the vehicle. Law Enforcement may use discretion to give a verbal warning, or written violation. Vehicle may be impounded. **Government vehicles are exempt. To include, PD,  EMS, and DOJ vehicles. Lawyer vehicles are not DOJ vehicles.**",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 275,
            "Points": 1
        },
        "Name": "Improper Window Tint"
    },
    "Failure to Signal": {
        "Type": "Misdemeanor",
        "Description": "Does not use a turn signal when necessary.",
        "Group": 8,
        "Default": {
            "Time": 0,
            "Fine": 150,
            "Points": 0
        },
        "Name": "Failure to Signal"
    },
    "Misuse of a High-Performance Rental Vehicle": {
        "Type": "Misdemeanor",
        "Group": 8,
        "Default": {
            "Time": 25,
            "Fine": 10000,
            "Points": 0
        },
        "Name": "Misuse of a High-Performance Rental Vehicle"
    },
    "Felony Hit and Run": {
        "Type": "Felony",
        "Description": "Leaving a scene of an accident that resulted in injury or death involving property damage, without identifying yourself to the parties involved.",
        "Group": 8,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 3
        },
        "Accomplice": {
            "Time": 14,
            "Fine": 1325,
            "Points": 3
        },
        "Accessory": {
            "Time": 12,
            "Fine": 1050,
            "Points": 3
        },
        "Name": "Felony Hit and Run"
    },
    "Reckless Evading": {
        "Type": "Felony",
        "Description": "Dangerously flees from a police vehicle while operating a motor vehicle to avoid being apprehended, detained, or arrested. Crossing into oncoming lanes of traffic, causing damage to property, putting lives in danger.",
        "Group": 8,
        "Default": {
            "Time": 18,
            "Fine": 1700,
            "Points": 3
        },
        "Accomplice": {
            "Time": 18,
            "Fine": 1700,
            "Points": 3
        },
        "Accessory": {
            "Time": 15,
            "Fine": 1250,
            "Points": 3
        },
        "Name": "Reckless Evading"
    },
    "Reckless Driving": {
        "Type": "Felony",
        "Description": "Drives in a way that is careless and with gross disregard for human life.",
        "Group": 8,
        "Default": {
            "Time": 12,
            "Fine": 1125,
            "Points": 3
        },
        "Name": "Reckless Driving"
    },
    "Operating a Motor Vehicle on a Suspended or Revoked License": {
        "Type": "Felony",
        "Description": "Person operates a motor vehicle on a suspended and revoked license. Vehicle is to be State Impounded, and the operator of the vehicle arrested for not having the proper license to drive legally.",
        "Group": 8,
        "Default": {
            "Time": 14,
            "Fine": 1325,
            "Points": 3
        },
        "Name": "Operating a Motor Vehicle on a Suspended or Revoked License"
    },
    "Street Racing": {
        "Type": "Felony",
        "Description": "A person shall not engage in a motor vehicle speed contest on a highway or public roadway of any kind. Any individual who organizes or partakes in a motor vehicle speed contest. This includes utilizing any public road throughout the state as a means for automotive racing as a sport and/or for material gain. As used in this section, a motor vehicle speed contest includes a motor vehicle race against (1) another vehicle; (2) a clock; or (3) any other timing device. Add 4 points on License.",
        "Group": 8,
        "Default": {
            "Time": 21,
            "Fine": 1975,
            "Points": 4
        },
        "Accomplice": {
            "Time": 21,
            "Fine": 1975,
            "Points": 4
        },
        "Accessory": {
            "Time": 17,
            "Fine": 1500,
            "Points": 4
        },
        "Name": "Street Racing"
    },
    "Felony Misuse of a High-Performance Rental Vehicle": {
        "Type": "Felony",
        "Group": 8,
        "Default": {
            "Time": 100,
            "Fine": 100000,
            "Points": 0
        },
        "Name": "Felony Misuse of a High-Performance Rental Vehicle"
    },
    "Hunting in an Unregulated Area": {
        "Type": "Misdemeanor",
        "Description": "Hunting outside the Hunting Area/Zone as designated by the State of San Andreas. Offenders are subject to search for any animals or animal parts acquired by hunting outside of the designated hunting area/zone. After three or more offenses, individuals are subject to removal of their Hunting License.",
        "Group": 9,
        "Default": {
            "Time": 0,
            "Fine": 550,
            "Points": 0
        },
        "Name": "Hunting in an Unregulated Area"
    },
    "Misdemeanor Animal Cruelty": {
        "Type": "Misdemeanor",
        "Description": "Recklessly or in a heat of passion wounds or kills an animal that was not a present danger to a person or persons. These actions did not come from result of a legally licensed hunting rifle or by legally fishing.",
        "Group": 9,
        "Default": {
            "Time": 7,
            "Fine": 675,
            "Points": 0
        },
        "Accomplice": {
            "Time": 7,
            "Fine": 1975,
            "Points": 0
        },
        "Accessory": {
            "Time": 6,
            "Fine": 420,
            "Points": 0
        },
        "Name": "Misdemeanor Animal Cruelty"
    },
    "Misdemeanor Possession of a Gill Net": {
        "Type": "Misdemeanor",
        "Description": "Possesses a gill net that is not actively in use.",
        "Group": 9,
        "Default": {
            "Time": 7,
            "Fine": 600,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of a Gill Net"
    },
    "Hunting Without a License": {
        "Type": "Misdemeanor",
        "Description": "Hunting in a public area without proper and up-to-date licensure issued by the State. All illegally obtained carcasses and pelts are to be confiscated and destroyed in accordance with Park Ranger SOPs.",
        "Group": 9,
        "Default": {
            "Time": 10,
            "Fine": 800,
            "Points": 0
        },
        "Name": "Hunting Without a License"
    },
    "Fishing Without a License": {
        "Type": "Misdemeanor",
        "Description": "Fishing in a public area without proper and up-to-date licensure issued by the State. All illegally obtained fish & wildlife is to be confiscated and released (if possible) or destroyed in accordance with Park Ranger SOPs.",
        "Group": 9,
        "Default": {
            "Time": 10,
            "Fine": 800,
            "Points": 0
        },
        "Name": "Fishing Without a License"
    },
    "Misdemeanor Possession of Illegal Fishing Hooks": {
        "Type": "Felony",
        "Description": "Person is found in possession of any amount of lllegal Fishing Hooks.",
        "Group": 9,
        "Default": {
            "Time": 7,
            "Fine": 650,
            "Points": 0
        },
        "Name": "Misdemeanor Possession of Illegal Fishing Hooks"
    },
    "Unlawful Taking of Protected Fish or Wildlife": {
        "Type": "Felony",
        "Description": "No person shall either individually or in association with one or more other persons, willfully bait, trap, hunt, injure, maim, kill, otherwise harm, or maintain possession of the pelt, carcass, or any part of any animal named on the restricted hunting or fishing lists maintained by the State Department of Natural Resources",
        "Group": 9,
        "Default": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Accomplice": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Accessory": {
            "Time": 14,
            "Fine": 1350,
            "Points": 0
        },
        "Name": "Unlawful Taking of Protected Fish or Wildlife"
    },
    "Felony Animal Cruelty": {
        "Type": "Felony",
        "Description": "Intentionally wounds or maliciously ends the life of an animal in any situation other than being in present danger to a person or persons. These actions did not come from result of a legally licensed hunting rifle or by legally fishing.",
        "Group": 9,
        "Default": {
            "Time": 18,
            "Fine": 2025,
            "Points": 0
        },
        "Accomplice": {
            "Time": 18,
            "Fine": 2025,
            "Points": 0
        },
        "Accessory": {
            "Time": 15,
            "Fine": 1650,
            "Points": 0
        },
        "Name": "Felony Animal Cruelty"
    },
    "Criminal Use of a Gill Net": {
        "Type": "Felony",
        "Description": "No person shall, either individually or in association with one or more other persons, willfully place a gill net in OR collect fish from a gill net in any waterway in the state of San Andreas. Gill nets are to be destroyed upon detection by law enforcement officers.",
        "Group": 9,
        "Default": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Name": "Criminal Use of a Gill Net"
    },
    "Criminal Use of Illegal Fishing Hooks": {
        "Type": "Felony",
        "Description": "Any person(s) who willfully uses an illegal Fishing Hook with a fishing rod in any waterway in the state of San Andreas. lllegal Fishing Hooks are to be seized in commission of these actions.",
        "Group": 9,
        "Default": {
            "Time": 18,
            "Fine": 1700,
            "Points": 0
        },
        "Name": "Criminal Use of Illegal Fishing Hooks"
    },
    // "Possession of Stolen Goods": {
    //     "Name": "Possession of Stolen Goods",
    // },
    // "Hunting/Fishing without a license": {
    //     "Name": "Hunting/Fishing without a license"
    // },
    // "Criminal Possession of a Beanbag Shotgun": {
    //     "Name": "Criminal Possession of a Beanbag Shotgun"
    // },
    // "Animal Cruelty": {
    //     "Name": "Animal Cruelty"
    // },
}