(function( graph, $, undefined ) { 

  // Public Property : demoData
  graph.demoData = [
  // demoData[0]
  { nodes: [
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'b', label: 'vertex-A', name: 'node B', props:{ href: 'http://js.cytoscape.org#b' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'c', label: 'vertex-A', name: 'node C', props:{ href: 'http://js.cytoscape.org#c' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'd', label: 'vertex-B', name: 'node D', props:{ href: 'http://js.cytoscape.org#d' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'e', label: 'vertex-B', name: 'node E', props:{ href: 'http://js.cytoscape.org#e' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'f', label: 'vertex-A', name: 'node F', props:{ href: 'http://js.cytoscape.org#f' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'g', label: 'vertex-C', name: 'node G', props:{ href: 'http://js.cytoscape.org#g' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'h', label: 'vertex-C', name: 'node H', props:{ href: 'http://js.cytoscape.org#h' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'i', label: 'vertex-C', name: 'node I', props:{ href: 'http://js.cytoscape.org#i' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'j', label: 'vertex-A', name: 'node J', props:{ href: 'http://js.cytoscape.org#j' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'k', label: 'vertex-A', name: 'node K', props:{ href: 'http://js.cytoscape.org#k' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'l', label: 'vertex-D', name: 'node L', props:{ href: 'http://js.cytoscape.org#l' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'm', label: 'vertex-D', name: 'node M', props:{ href: 'http://js.cytoscape.org#m' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'n', label: 'vertex-D', name: 'node N', props:{ href: 'http://js.cytoscape.org#n' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'o', label: 'vertex-D', name: 'node O', props:{ href: 'http://js.cytoscape.org#o' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'p', label: 'vertex-A', name: 'node P', props:{ href: 'http://js.cytoscape.org#p' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'q', label: 'vertex-F', name: 'node Q', props:{ href: 'http://js.cytoscape.org#q' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'r', label: 'vertex-F', name: 'node R', props:{ href: 'http://js.cytoscape.org#r' }}, classes: 'demo-data', selectable: true, selected: false },
    ],           
    edges: [
      { data: { id: 'ae', label: 'edge-X', name: 'edge AE', weight: 1, source: 'a', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ab', label: 'edge-X', name: 'edge AB', weight: 3, source: 'a', target: 'b' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'be', label: 'edge-X', name: 'edge BE', weight: 4, source: 'b', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bc', label: 'edge-X', name: 'edge BC', weight: 5, source: 'b', target: 'c' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ce', label: 'edge-X', name: 'edge CE', weight: 6, source: 'c', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cd', label: 'edge-X', name: 'edge CD', weight: 2, source: 'c', target: 'd' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'de', label: 'edge-X', name: 'edge DE', weight: 7, source: 'd', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'af', label: 'edge-Y', name: 'edge AF', weight: 8, source: 'a', target: 'f' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bh', label: 'edge-Y', name: 'edge BH', weight: 7, source: 'b', target: 'h' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bo', label: 'edge-Y', name: 'edge BO', weight: 2, source: 'b', target: 'o' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bp', label: 'edge-Y', name: 'edge BP', weight: 3, source: 'b', target: 'p' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'br', label: 'edge-Y', name: 'edge BR', weight: 4, source: 'b', target: 'r' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cg', label: 'edge-Y', name: 'edge CG', weight: 5, source: 'c', target: 'g' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cj', label: 'edge-Y', name: 'edge CJ', weight: 6, source: 'c', target: 'j' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'co', label: 'edge-Y', name: 'edge CO', weight: 2, source: 'c', target: 'o' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'di', label: 'edge-Y', name: 'edge DI', weight: 7, source: 'd', target: 'i' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'dq', label: 'edge-Y', name: 'edge DQ', weight: 6, source: 'd', target: 'q' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'eh', label: 'edge-Z', name: 'edge EH', weight: 2, source: 'e', target: 'h' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'fk', label: 'edge-Z', name: 'edge FK', weight: 9, source: 'f', target: 'k' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'kl', label: 'edge-Z', name: 'edge kl', weight: 5, source: 'k', target: 'l' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ke', label: 'edge-Z', name: 'edge KE', weight: 5, source: 'k', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'kn', label: 'edge-Z', name: 'edge KN', weight: 7, source: 'k', target: 'n' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'mj', label: 'edge-Z', name: 'edge MJ', weight: 1, source: 'm', target: 'j' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'na', label: 'edge-Z', name: 'edge NA', weight: 1, source: 'n', target: 'a' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'np', label: 'edge-Z', name: 'edge np', weight: 2, source: 'n', target: 'p' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pe', label: 'edge-Z', name: 'edge PE', weight: 3, source: 'p', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pf', label: 'edge-Z', name: 'edge PF', weight: 8, source: 'p', target: 'f' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pg', label: 'edge-Z', name: 'edge PG', weight: 4, source: 'p', target: 'g' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'rk', label: 'edge-Z', name: 'edge RK', weight: 8, source: 'r', target: 'k' }, classes: 'demo-data', selectable: true, selected: false },
    ]},
    // demoData[1]
    {
        "nodes": [
        {
            "data":
            {
                "id": "4.1882491",
                "label": "production",
                "name": "Haunted House",
                "props":
                {
                    "episode_nr": 31,
                    "kind": "episode",
                    "md5sum": "a717386423ac8b105f59646ebe2675da",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Australia"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "release dates": "Australia:2011"
                    }],
                    "phonetic_code": "H532",
                    "id": 1829881,
                    "title": "Haunted House",
                    "season_nr": 2,
                    "production_year": 2011
                },
                "_order": "start"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "production"
        },
        {
            "data":
            {
                "id": "5.164566",
                "label": "company",
                "name": "Active TV",
                "props":
                {
                    "country_code": "[au]",
                    "md5sum": "dd13365e47dc499a9ddc30a2716d220a",
                    "name": "Active TV",
                    "id": 128554,
                    "name_pcode_sf": "A2313",
                    "name_pcode_nf": "A2313"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "4.1949538",
                "label": "none",
                "name": "Haunted House",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "1c03785eb5edaac44dcc0ad0a39ded12",
                    "full_info": [
                    {
                        "goofs": "CHAR: Mandy closes the door in her trailer and puts a chair in front of it as if to block it. This would be pointless as the door opens outwards."
                    },
                    {
                        "quotes": "Denise Hemphill: Now-now, no, I'm not a detective. Hell, I ain't even a cop. But what I am is somebody who watched every one of the Cosby Mysteries, ok."
                    },
                    {
                        "quotes": "Chanel Oberlin: Um, this just in - Ms. Bean's not dead. She haunting the campus with her fatness and murdering people."
                    },
                    {
                        "quotes": "Mandy: One girl killed herself, I heard. Another girl was institutionalized. The third is actually doing pretty well on Fox News."
                    },
                    {
                        "quotes": "Mandy: Sweet heart... I looked at that baby up close. I know my peas and carrots. That baby was a girl."
                    },
                    {
                        "quotes": "[Hester finds Chad opening his pants in the graveyard]::Chad Radwell: I was just, uh... I was, uh...::Hester Ulrich: Say it!::Chad Radwell: You know, sometimes uh, sometimes I come out here and I just run my hands on the gravestones. When I find a gravestone I like, I, uh... I get turned on and I, I rub one out to it.::Hester Ulrich: I get it. I get you more than anyone. I also find the thought of dead bodies extremely arousing!"
                    },
                    {
                        "quotes": "Hester Ulrich: I just don't understand why I have all these dark feelings.::Chad Radwell: You know, I just think our generation's had it too easy, you know? We haven't seen enough horrible stuff. There's no awful diseases randomly killing people, there's not really any awesome wars to go off to and witness horrific things you can't unsee. We're like pulled out of all of 'em. I don't know, sometimes I just don't even feel like I'm living, you know. I mean, the only time I feel anything is when I'm thinking about chopping up a body.::Hester Ulrich: I feel the same way."
                    },
                    {
                        "quotes": "Grace Gardner: How come we never talk about mom? You told me that she went to this school and that she joined Kappa and that she died when I was two and not much else.::Wes Gardner: It's hard for me to talk about it sometimes. I miss her a lot.::Grace Gardner: It's pretty convenient... that she died in a fire. All of her stuff got burned, any record of her, my birth certificate.::Wes Gardner: What are you talking about?::Grace Gardner: Why are you lying to me? Something does not make sense! Why did this all start happening as soon as I got to campus? Why am I the only person in Kappa without a mother?::Wes Gardner: Shhhh. Hey honey, you've gotta give me more here, okay? I don't understand what you're getting at. Are you on bath salts?"
                    },
                    {
                        "quotes": "Grace Gardner: Am I the baby that was born in Kappa that night? Did mom die in that bathtub?::Wes Gardner: What? No, you were born in a hospital. I was there, I saw you come out of your mother... Big mistake, by the way!"
                    },
                    {
                        "quotes": "[Wes's class watches Children of the Corn]::Wes Gardner: What could be scarier for an adult than a child coming to murder them? Isn't that all of our greatest fears that the pain, the regrets, the mistakes of our youth will destroy us in our adulthood? That we can't escape our inner child, one we would rather forget but who at the end of the day has all the power?"
                    },
                    {
                        "quotes": "Chad Radwell: Alright, everybody, listen up! All of your lives are in danger! DO NOT go to the haunted house on Shady Lane! There are dead bodies!::Hester Ulrich: Dead bodies!::Chad Radwell: Real life dead bodies! Okay?::Hester Ulrich: Lots!::Girl: Did he say dead bodies?::Dude: Dude, that sounds awesome!::Other Dude: Come on, everybody! Lets go to the haunted house on Shady Lane!"
                    },
                    {
                        "quotes": "Chad Radwell: Alright, if we go to the police, they're gonna see that I'm still rockin' a mad sidepipe and they're gonna think I had something to do with it."
                    },
                    {
                        "quotes": "Chanel Oberlin: Halloween is the most important day of the year. It's the one on the Gregorian calendar where you're allowed to go around terrifying children and not be branded a psychopath."
                    },
                    {
                        "quotes": "Chanel Oberlin: I am a future network news anchor who's super-classy and has almost no fat on her body. But a lot of my fans are, like, friendless, dumpy coeds at this or that nursing school in one of this country's various national armpits. And Chanel-O-Ween is the one time of year where I can give these precious donkeys something to look forward to. They put down their Hot Pockets and bask in the warm glow of what it feels like... to love me."
                    },
                    {
                        "quotes": "Chanel Oberlin: Chanel-O-Ween is approaching, so I went shopping with my comatose grandmother's credit card and bought presents."
                    },
                    {
                        "quotes": "Denise Hemphill: Shondell, if you can hear me in that Best Buy parking lot in the sky, I am so sorry that I pushed you out of my car and drove off real scared, but I promise you by Halloween night, I will avenge your face-stabbing, baby girl. Okay? I, Denise Hemphill, is gonna solve this crime!"
                    },
                    {
                        "quotes": "Dean Cathy Munsch: Have any of you ever heard of \"negligent homicide?\" If the police come, they will arrest all of you for leaving this girl to die while you were downstairs getting into the groove."
                    },
                    {
                        "quotes": "Dean Cathy Munsch: Do you mean to suggest I changed out of my nightgown, strapped myself into a skin-tight pleather Red Devil costume, climbed out a second-story dormer and shimmied to the ground with a chainsaw before entering a window I had left open, tried to kill you, then leapt out the window, climbed back up the wall, changed back in my nightgown and raced downstairs, all in the course of about ninety seconds?::Wes Gardner: Yes, that is exactly what we mean to suggest, Dean!"
                    },
                    {
                        "quotes": "Dean Cathy Munsch: I am the administration's liaison to Greek Life on campus. If a young sorority pledge dies under my so-called supervision, my career is over! But her dreams are as dead as she is while mine still burn bright."
                    },
                    {
                        "quotes": "Dean Cathy Munsch: I'm protecting you. I'm protecting your families. And you may think I'm a monster tonight, but years from now, when you have lived a boring, painfully uncreative life in a home filled with Pottery Barn sofas and no integrity, you're gonna remember me as I truly am... your guardian angel."
                    },
                    {
                        "quotes": "Mandy: Munsch put the fear of God into us that night. She's the devil, that one... the darkness."
                    },
                    {
                        "quotes": "Zayday Williams: It might behoove you to recall that everyone here witnessed you actually murder someone, a fact that's one anonymous phone call from being a juicy little segment on the local news.::Chanel Oberlin: I didn't kill Miss Bean. And if I do murder someone... it's gonna be you."
                    },
                    {
                        "quotes": "Ms. Agatha Bean: We need to dispose of this body on our own. Now, I've got everything we need in the kitchen to make sausages out of her. I can sell 'em at the farmer's market on Sunday... or I can just feed 'em to these bitches for dinner."
                    },
                    {
                        "quotes": "Chanel #3: Chanel, it's 3 a.m. We're concerned about your mental health. What are you doing?::Chanel Oberlin: Just sharpening knives. Kitchen knives should be... razor sharp."
                    },
                    {
                        "quotes": "Chanel Oberlin: A sitting Kappa President has not lost the office to a freshman in one hundred and fifty years! I am responsible for the worst pledge class in Kappa history! And now Zayday's gonna win because we live in the age of Obama?"
                    },
                    {
                        "quotes": "Hester Ulrich: I want everything Chanel has... and that includes you.::Chad Radwell: Oh my God, I got a total chub right now."
                    },
                    {
                        "quotes": "Denise Hemphill: This house is haunted!::Pete Martinez: She's right!::[in unison]::Denise Hemphill, Pete Martinez: See, I did some research down at the library... When? Last night! I didn't see you there. Which library?::Pete Martinez: Baker Street.::Denise Hemphill: North Jackson.::Denise Hemphill, Pete Martinez: Ooooh!"
                    },
                    {
                        "quotes": "Chanel #3: My sense of personal identity is completely external. If I didn't have Kappa to define me, I really don't have much to offer."
                    },
                    {
                        "quotes": "Chanel #5: I find that my particularly style of speaking and gesticulation is extremely off-putting to most boys. And girls. And anyone. But with Kappa as my calling-card, everyone seems to overlook that."
                    },
                    {
                        "quotes": "Chanel Oberlin: I have it on good authority that the Red Devil is gonna kill someone in Zayday's haunted house. Don't let it be you.::Chanel #5: How do you know that's gonna happen?::Chanel Oberlin: I don't. But how stupid would the killer be to NOT kill someone there? It's Halloween, everyone will be in costume. Hell, he could kill someone and people would think it was a decoration::Chanel #3: You have this way too thought out."
                    },
                    {
                        "quotes": "Denise Hemphill: I think the reason you want to have a haunted house party is cuz a haunted party is like a buffet for murderers! Yeah, yeah! You can just go around killin' anybody you want and ain't nobody even gonna notice."
                    },
                    {
                        "quotes": "Hester Ulrich: I am so grateful that you guys are sharing your not-food lunch with me, but won't we, like, die if we eat cotton balls?::Chanel #3: Only if they cause a blockage in our intestinal tracks, but that's what the sauce is for.::Chanel #5: Lubrication. And it gives you that wonderfully full feeling without all of the calories."
                    },
                    {
                        "quotes": "Hester Ulrich: Do you think you're man enough to take me inside that house and attack my crack?"
                    },
                    {
                        "quotes": "Chad Radwell: The haunted house doesn't even start for another two hours. Why would they light all the candles? It seems wasteful."
                    },
                    {
                        "quotes": "Chad Radwell: Hey, so, uh... a little awkward since we're about to bone down and everything but, um... what's your name?"
                    },
                    {
                        "quotes": "Chanel Oberlin: Guys can be as porky as they want and we still like them. I'm as skinny as Karen Carpenter in the morgue and Chad Radwell still won't commit to me!"
                    },
                    {
                        "quotes": "Tommy: Which one of you ladies would like to be my costume for Halloween? I'm going as \"Dude Having Awesome Sex With You.\""
                    },
                    {
                        "quotes": "Chanel Oberlin: I recently took a women's studies class. Yes, because it was a requirement, but I learned a lot anyways. Like the culture that says it's okay for a man to objectify a woman for her appearance is the same culture that pressures girls as young as ten to have eating disorders.::Tommy: So you're basically sayin' I'm the one responsible for making you look hot? You're welcome."
                    },
                    {
                        "quotes": "Chanel Oberlin: There is a killer on this campus murdering women. When you treat us like meat, you're no better than him."
                    },
                    {
                        "quotes": "Chanel Oberlin: You have all rallied around me! Just like I would do for any of you if I wasn't busy that day."
                    },
                    {
                        "soundtrack": "\"You\" (uncredited) Performed by Frida Sundemo"
                    },
                    {
                        "soundtrack": "\"Tell It to My Heart\" (uncredited) Written by 'Seth Swirsky' (qv) and Ernie Gold Performed by 'Taylor Dayne' (qv)"
                    },
                    {
                        "soundtrack": "\"Mad About You\" (uncredited) Performed by Belinda Carlisle"
                    },
                    {
                        "soundtrack": "\"Eyes Without a Face\" (uncredited) Performed by Billy Idol"
                    },
                    {
                        "soundtrack": "\"Scream Queens End Credits Theme\" (uncredited) Written by Mac Quayle"
                    },
                    {
                        "trivia": "This is the first part of the three-part episode Halloween special."
                    },
                    {
                        "trivia": "SPOILER: The bathtub baby is revealed to be a girl."
                    },
                    {
                        "trivia": "SPOILER: Gigi is the Hag Of Shady Lane"
                    },
                    {
                        "trivia": "Pete and Grace visit the former kappa woman dressed as 'Kate Hudson (I)' (qv) and 'Matthew McConaughey' (qv) from _How to Lose a Guy in 10 Days (2003)_ (qv). Grace's father is played by 'Oliver Hudson (I)' (qv), 'Kate Hudson (I)' (qv)'s older brother."
                    },
                    {
                        "trivia": "Chaneloween, in which Chanel sends her social media followers Halloween presents and have them record their responses \"to post all over social media to exploit it for her own gain,\" is a play on \"Swiftmas,\" where 'Taylor Swift' (qv) sent out Christmas presents to her fans in 2014 and taped their responses. The videos start out with the same typeface on a black screen, mention similar emojis and even have similar soundtracks."
                    },
                    {
                        "trivia": "Chanel told Hester to dress as Ida Saxton McKinley for Halloween. 'Lea Michele' (qv), who plays Hester, went to \"William McKinley High School\" in _\"Glee\" (2009)_ (qv), hers and 'Ryan Murphy (I)' (qv)'s previous TV show."
                    },
                    {
                        "trivia": "SPOILER: Body Count (1): Mandy Greenwell."
                    },
                    {
                        "filming dates": "April 2015 - December 2015"
                    },
                    {
                        "certificates": "Finland:K-16/13"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "certificates": "Singapore:R21"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "43"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:6 October 2015"
                    },
                    {
                        "release dates": "Chile:7 October 2015"
                    },
                    {
                        "release dates": "UK:16 November 2015"
                    },
                    {
                        "release dates": "Netherlands:5 January 2016"
                    },
                    {
                        "release dates": "Finland:7 April 2016"
                    },
                    {
                        "release dates": "Japan:3 February 2017"
                    }],
                    "phonetic_code": "H532",
                    "id": 1992521,
                    "title": "Haunted House",
                    "season_nr": 1,
                    "production_year": 2015,
                    "name": "Haunted House",
                    "vid": "_id_3SmnL",
                    "label": "none"
                },
                "_order": "start"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "production user-update"
        },
        {
            "data":
            {
                "id": "5.19436",
                "label": "company",
                "name": "Fox Network",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "b65a0ae6b633a2f8f76de6ead49432ab",
                    "name": "Fox Network",
                    "id": 105,
                    "name_pcode_sf": "F2536",
                    "name_pcode_nf": "F2536"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.28292",
                "label": "company",
                "name": "E4",
                "props":
                {
                    "country_code": "[gb]",
                    "md5sum": "a660f6ccd91a59f91d93943adc00ebdf",
                    "name": "E4",
                    "id": 557,
                    "name_pcode_sf": "E21",
                    "name_pcode_nf": "E"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.91491",
                "label": "company",
                "name": "FOX",
                "props":
                {
                    "country_code": "[nl]",
                    "md5sum": "45c9baf0569584924706104dbcc3afd3",
                    "name": "FOX",
                    "id": 379,
                    "name_pcode_sf": "F254",
                    "name_pcode_nf": "F2"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.92088",
                "label": "company",
                "name": "Citytv",
                "props":
                {
                    "country_code": "[ca]",
                    "md5sum": "65a96d943a86844861e8f1e6f6ffed41",
                    "name": "Citytv",
                    "id": 555,
                    "name_pcode_sf": "C312",
                    "name_pcode_nf": "C31"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.12042",
                "label": "company",
                "name": "20th Century Fox Television",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "5c2b229f30b6e5de89a4ef604bc6f081",
                    "name": "20th Century Fox Television",
                    "id": 676,
                    "name_pcode_sf": "T2536",
                    "name_pcode_nf": "T2536"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.162689",
                "label": "company",
                "name": "Brad Falchuk Teley-Vision",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "34dc1f43c631b5b2b2aebd39c762c3c9",
                    "name": "Brad Falchuk Teley-Vision",
                    "id": 106708,
                    "name_pcode_sf": "B6314",
                    "name_pcode_nf": "B6314"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.170509",
                "label": "company",
                "name": "Ryan Murphy Productions",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "f1470cd98917672f48a514844b8ac223",
                    "name": "Ryan Murphy Productions",
                    "id": 106620,
                    "name_pcode_sf": "R5616",
                    "name_pcode_nf": "R5616"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "5.180750",
                "label": "company",
                "name": "Prospect Films",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "f86c161c9507a44818beeee54598c88f",
                    "name": "Prospect Films",
                    "id": 130309,
                    "name_pcode_sf": "P6212",
                    "name_pcode_nf": "P6212"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "id": "4.1968792",
                "label": "production",
                "name": "Haunted House",
                "props":
                {
                    "episode_nr": 14,
                    "kind": "episode",
                    "md5sum": "6211aa55582938a9ea3202527467df8d",
                    "full_info": [
                    {
                        "runtimes": "22"
                    },
                    {
                        "release dates": "USA:15 April 2008"
                    }],
                    "phonetic_code": "H532",
                    "id": 1923518,
                    "title": "Haunted House",
                    "season_nr": 3,
                    "production_year": 2008
                },
                "_order": "start"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "production"
        },
        {
            "data":
            {
                "id": "5.110894",
                "label": "company",
                "name": "Dickhouse Productions",
                "props":
                {
                    "country_code": "[us]",
                    "md5sum": "fbccf436b4f8956ec46b40c12ef6740a",
                    "name": "Dickhouse Productions",
                    "id": 115363,
                    "name_pcode_sf": "D2163",
                    "name_pcode_nf": "D2163"
                },
                "_order": "end"
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "company"
        },
        {
            "data":
            {
                "name": "And the Hidden Stash",
                "id": "4.5475",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "648ad42989ae2954d7b639ea524a4204",
                    "full_info": [
                    {
                        "soundtrack": "\"Second Chance\" (uncredited) Written by Bjorn Daniel Arne Yttling, Peter Andreas Moren, John Thomas Daniel Eriksson Performed by Peter Bjorn and John"
                    },
                    {
                        "soundtrack": "\"Second Chance\" Performed by 'Peter Bjorn and John' (qv)"
                    },
                    {
                        "trivia": "Final tally for cupcake business venture: $727.00."
                    },
                    {
                        "trivia": "Zooey Deschanel, Jennifer Love Hewitt, Katey Holmes, are the 3 celebs Max calls Caroline Channing."
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "USA:Not Rated"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Warner Brothers Burbank Studios - 4000 Warner Boulevard, Burbank, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "Canada:24 September 2012"
                    },
                    {
                        "release dates": "USA:24 September 2012"
                    },
                    {
                        "release dates": "UK:15 November 2012"
                    },
                    {
                        "release dates": "Finland:9 January 2013"
                    },
                    {
                        "release dates": "Germany:26 February 2013"
                    },
                    {
                        "release dates": "Netherlands:27 December 2013"
                    },
                    {
                        "release dates": "Hungary:21 August 2014"
                    },
                    {
                        "release dates": "Japan:17 September 2014"
                    }],
                    "phonetic_code": "A5352",
                    "id": 11077,
                    "title": "And the Hidden Stash",
                    "season_nr": 2,
                    "production_year": 2012
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Pilot",
                "id": "4.8928",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "436e4d82bcb95eb9900e8978eca55b5d",
                    "full_info": [
                    {
                        "quotes": "Abby: Didn't you use condoms?::Billie: I guess it turns out they're not 100% effective... unless you actually take them out of your purse."
                    },
                    {
                        "quotes": "Billie: I watch movies for a living, so to me, the three stages of womanhood are: Meg Ryan in \"Sleepless in Seattle\", Meg Ryan in \"You've Got Mail\", and Meg Ryan in the grocery store, saying \"No, really, I am Meg Ryan!\""
                    },
                    {
                        "quotes": "Billie: This may sound a little nuts, but I'm thinking of going home with a guy who may be significantly younger than I am, and I need to know if the situation is despearate or empowering.::Olivia: Is he over eighteen?::Billie: Yup.::Olivia: Empowering!"
                    },
                    {
                        "quotes": "Abby: What was it like?::Billie: Like eating candy.::Olivia: I love candy!::Abby: What kind of candy?::Billie: Young candy! I'm not kidding. He smelled like Skittles."
                    },
                    {
                        "soundtrack": "\"Single Ladies (Put A Ring On It)\" (uncredited) Performed by 'Beyoncé Knowles' (qv)"
                    },
                    {
                        "trivia": "Among the movie posters found in Billie's apartment are An American Werewolf in London, Gilda, Mata Hari, Niagara, and Attack of the 50 Foot Woman"
                    },
                    {
                        "plot": "Billie & Zack are opposites in that she's a thirty something woman who knows what she wants, but after walking out on her boss/boyfriend for not proposing during their celebration of being together for three years, she goes out with her friends and hooks up with a much younger Zack...and is pregnant five weeks later."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:21 September 2009"
                    },
                    {
                        "release dates": "USA:21 September 2009"
                    },
                    {
                        "release dates": "Australia:1 December 2009"
                    },
                    {
                        "release dates": "Japan:28 March 2010"
                    },
                    {
                        "release dates": "Israel:April 2010"
                    },
                    {
                        "release dates": "Poland:17 May 2010"
                    },
                    {
                        "release dates": "Hungary:22 May 2010"
                    },
                    {
                        "release dates": "Philippines:4 June 2010"
                    },
                    {
                        "release dates": "Netherlands:8 June 2010"
                    },
                    {
                        "release dates": "UK:17 June 2010"
                    },
                    {
                        "release dates": "Finland:6 January 2012"
                    },
                    {
                        "release dates": "Germany:8 January 2012"
                    }],
                    "phonetic_code": "P43",
                    "id": 62656,
                    "title": "Pilot",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "And the Life After Death",
                "id": "4.9538",
                "label": "production",
                "props":
                {
                    "episode_nr": 11,
                    "kind": "episode",
                    "md5sum": "0fbe44d77b7ba23e929837db6561219d",
                    "full_info": [
                    {
                        "goofs": "CHAR: The crying woman that Caroline hugs claims she was referring to a guy standing to the right of her. The man she was speaking of was barely in anyone's view and she walked straight to Caroline."
                    },
                    {
                        "soundtrack": "\"Second Chance\" (uncredited) Written by Bjorn Daniel Arne Yttling, Peter Andreas Moren, John Thomas Daniel Eriksson Performed by Peter Bjorn and John"
                    },
                    {
                        "soundtrack": "\"Second Chance\" Performed by 'Peter Bjorn and John' (qv)"
                    },
                    {
                        "trivia": "Final tally for cupcake business venture: $77.00."
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "certificates": "USA:Not Rated"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Warner Brothers Burbank Studios - 4000 Warner Boulevard, Burbank, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:2 December 2013"
                    },
                    {
                        "release dates": "Finland:20 March 2014"
                    },
                    {
                        "release dates": "UK:17 April 2014"
                    }],
                    "phonetic_code": "A5341",
                    "id": 11090,
                    "title": "And the Life After Death",
                    "season_nr": 3,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "To Sext or Not to Sext",
                "id": "4.32408",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "dd25218e87a9942d3dada1e509cad325",
                    "full_info": [
                    {
                        "goofs": "FAKE: When Jen opens her door to talk to Liam we see that the glass is at least 5/8ths thick. When he loses his temper and punches it, it cracks. Glass that think would never break under a punch."
                    },
                    {
                        "quotes": "[about her friend Teddy]::Adrianna Tate-Duncan: His godfather is Marlon Brando. Could you imagine?"
                    },
                    {
                        "soundtrack": "\"45 Parade Place\" (uncredited) by Aya"
                    },
                    {
                        "soundtrack": "\"I Like It, I Love It\" (uncredited) by 'Lyrics Born' (qv)"
                    },
                    {
                        "soundtrack": "\"I Want You So Bad\" (uncredited) by 'OK Go' (qv)"
                    },
                    {
                        "soundtrack": "\"JoAnne 2\" (uncredited) by 'Steve Goomas' (qv) & 'Doug Perkins (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"L.E.S. Artistes\" (uncredited) by Santigold"
                    },
                    {
                        "soundtrack": "\"New in Town\" (Fred Falke Remix)\" (uncredited) by 'Little Boots' (qv)"
                    },
                    {
                        "soundtrack": "\"Paper Aeroplane\" (uncredited) by Angus & Julia Stone"
                    },
                    {
                        "soundtrack": "\"Punching Bag\" (uncredited) by Kevin and the Octaves"
                    },
                    {
                        "soundtrack": "\"Rome\" (uncredited) by 'Phoenix (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Standing on the Shore\" (uncredited) by Empire of the Sun"
                    },
                    {
                        "plot": "The twisted Naomi continues her personal quest to destroy Annie's personal and professional life by spreading a false rumor about the existence of a nude photo of Annie, which causes a further divide between Annie and Dixon, as well as Annie's parents who continue to worry about her continuing slide down a dark path. Meanwhile, Liam decides to defy his stern and semi-abusive stepfather and try out with Dixon and Teddy for a spot on the school's surfing team. Elsewhere, Ryan worries about his romance with the manipulative Jen who begins to show off her true colors to him."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Ahmanson Mansion - 401 South Hudson Place, Hancock Park, Los Angeles, California, USA"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "runtimes": "41"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "PFM:Digital"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "USA:15 September 2009"
                    },
                    {
                        "release dates": "Canada:17 September 2009"
                    },
                    {
                        "release dates": "UK:5 January 2010"
                    },
                    {
                        "release dates": "Netherlands:7 February 2010"
                    },
                    {
                        "release dates": "Japan:11 June 2011"
                    },
                    {
                        "release dates": "Hungary:20 March 2012"
                    }],
                    "phonetic_code": "T2365",
                    "id": 33636,
                    "title": "To Sext or Not to Sext",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    }],
                    "season_nr": 2,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "We're Not in Kansas Anymore",
                "id": "4.33300",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "a665081dc6aa78796615023771cdae09",
                    "full_info": [
                    {
                        "goofs": "FAKE: In the opening sequence, during the shots of Dixon in the van, you can see that the sliding door beside him is not properly closed as they are supposed to be driving down the highway."
                    },
                    {
                        "quotes": "Dixon Wilson: [to Annie] But still, it's gonna be a lot easier for you. I mean, come on. You're a cute girl. Dudes are gonna be throwing themselves at you.::Annie Wilson: Oh, please. You had, like a million friends.::Dixon Wilson: There, back home, and they all knew, you know? About the whole adoption story? Just don't want to have to tell my story over and over and over again.::Annie Wilson: Then don't. All they need to know is that you're my brother. That's my story."
                    },
                    {
                        "quotes": "Annie Wilson: [to Dixon] Aren't you a little freaked out starting over at a new school? And, like a week late?::Dixon Wilson: What are you worried about? You already got, like a boyfriend out here."
                    },
                    {
                        "quotes": "Annie Wilson: Dad, I still can't believe you grew up in a house like this.::Dixon Wilson: I can't believe you ever left."
                    },
                    {
                        "quotes": "[first lines]::Dixon Wilson: This sucks.::Debbie Wilson: Dixon, how about a new phrase like \"this bites\" or \"this blows\"? because you've been saying \"this sucks\" for the last 1,500 miles.::Dixon Wilson: 'Cause it sucks."
                    },
                    {
                        "quotes": "Harry Wilson: Your mother and I have given up a lot for this move, too.::Annie Wilson: Really? Have you given up your boyfriend and the lead in the school play?::Harry Wilson: As a matter of fact, I have. He's heartbroken about it and so am I.::Annie Wilson: You're such a dork."
                    },
                    {
                        "quotes": "Annie Wilson: Grandma!::Dixon Wilson: [uneasy tone] You know... I've seen one of her old movies on Showtime the other night, right? Some 1980s romance-drama.::Annie Wilson: So? She's got a lot of her old movies on TV.::Dixon Wilson: In one scene, she was naked... frontal nudity. It's just not right."
                    },
                    {
                        "quotes": "Tabitha Wilson: [to Debbie] You wanna help? Go yell at the gardener for parking his crap wagon in my driveway.::Debbie Wilson: Actually, that's our crap wagon, Tabitha.::Tabitha Wilson: Well, then park it around the corner so the neighbors won't notice."
                    },
                    {
                        "quotes": "Erin Silver: [to Annie] I'm Silver.::Annie Wilson: Silver?::Erin Silver: Well, you can call me Erin, but I'm not gonna respond. So look, I wasn't plannig on making you feel welcome here, but then I saw the sticker and I thought, \"Hey, maybe the principal's daughter isn't such a big loser after all.\""
                    },
                    {
                        "quotes": "Tabitha Wilson: [to Dixon] Did you kick his ass?::Harry Wilson: Mom.::Tabitha Wilson: What? That's not the first thing you thought of when you heard he was in a fight. Then maybe that's why he lost.::Dixon Wilson: I didn't lose.::Tabitha Wilson: Never worry about being fair. Just grab onto those jewels and twist them like a garbage bag."
                    },
                    {
                        "quotes": "Harry Wilson: [to Dixon] Look, I'm gonna talk to your coach tomorrow. We'll get this all worked out.::Debbie Wilson: And make sure he's not too rough on our baby.::Annie Wilson: Yeah, 'cause he is such a delicate flower."
                    },
                    {
                        "quotes": "Adrianna Duncan: [to Naomi] I love that dress.::Naomi Clark: Oh, you know me, Adrianna. Early birthday present from myself."
                    },
                    {
                        "quotes": "Annie Wilson: [to Silver] If I hurt your feelings by sitting with someone you don't like, then I'm sorry.::Erin Silver: It's not that I don't like her. I hate her. Naomi is the Antichrist.::Annie Wilson: Well, the Antichrist didn't trash me in front of half a million people. You did."
                    },
                    {
                        "quotes": "Kelly Taylor: Silver, how many times have we had a talk about this blog of yours? All it does is cause problems.::Erin Silver: Yeah, well, that's what blogs are supposed to do. Cause problems. You know, you can't make me stop. It's not like it's a school activity or...::Kelly Taylor: Okay, I'm not talking to you as the guidance counselor right now. I am talking to you as your sister.::Erin Silver: Okay, then as my sister, you know what Naomi did and why I hate her.::Kelly Taylor: Yes, but this didn't hurt Naomi. It hurt Annie. Come on, you've got to let go of that anger. It's not doing you any good. You don't want to end up like Mom."
                    },
                    {
                        "quotes": "Naomi Clark: I cannot belive you told your dad everything! Are you kidding me?::Annie Wilson: I didn't tell him anything. He recognized the paper. Mr. Matthews could tell, too. I gave you my old term paper so you could take notes off it and get ideas on how to write your own paper, not to copy the entire thing word for word. My dad confronted me with both papers in his hands. What was I supposed to do?::Naomi Clark: Lie. Cry. Threaten him. Make something up. Be creative.::Annie Wilson: You sound like a spoiled brat.::Naomi Clark: Well, you sound like a little bitch! And just so we're simply clear, you are completely disinvited to my birthday party!::Annie Wilson: Like I care!::Naomi Clark: Oh, you should."
                    },
                    {
                        "quotes": "Debbie Wilson: I have a better idea, I can drive you home and we can swap stories about Harry's penis."
                    },
                    {
                        "quotes": "Nat Bussichio: [working an espresso machine] Uh! I'm never gonna learn to work this machine. Whatever happened to regular coffee? Willie!"
                    },
                    {
                        "soundtrack": "\"Beat Control\" (uncredited) Performed by 'Tilly and the Wall' (qv)"
                    },
                    {
                        "soundtrack": "\"California Bound\" (uncredited) Performed by 'Carolina Liar' (qv)"
                    },
                    {
                        "soundtrack": "\"Chasing Pavements\" (uncredited) Performed by 'Adele (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Don't Let Me Fall\" (uncredited) Written by 'Lenka Kripac' (qv) and 'Thomas Salter (III)' (qv) Performed by 'Lenka Kripac' (qv) (as Lenka)"
                    },
                    {
                        "soundtrack": "\"Last Day of Your Life\" (uncredited) Performed by Glass Pear"
                    },
                    {
                        "soundtrack": "\"Pot Kettle Black\" (uncredited) Performed by 'Tilly and the Wall' (qv)"
                    },
                    {
                        "soundtrack": "\"Shut Up and Let Me Go\" (uncredited) Written by 'Katie White (XIII)' (qv) and 'Jules De Martino' (qv) Performed by 'The Ting Tings' (qv)"
                    },
                    {
                        "soundtrack": "\"Time To Pretend\" (uncredited) Performed by 'MGMT' (qv)"
                    },
                    {
                        "soundtrack": "\"Viva La Vida\" (uncredited) Performed by 'Coldplay' (qv)"
                    },
                    {
                        "soundtrack": "\"Wannamama\" (uncredited) Performed by 'Pop Levi (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"What You Got\" (uncredited) Performed by 'Colby O'Donis' (qv) feat. 'Akon' (qv)"
                    },
                    {
                        "soundtrack": "\"Whee Doggie Banjo Bit\" (uncredited) Performed by Billy Lee Cox"
                    },
                    {
                        "soundtrack": "\"You're Gonna Go Far, Kid\" (uncredited) Performed by 'The Offspring' (qv)"
                    },
                    {
                        "soundtrack": "\"I Am the Very Model of a Modern Major General\" Performed by 'Shenae Grimes-Beech' (qv)"
                    },
                    {
                        "trivia": "'Tori Spelling' (qv) was originally signed on reprise her role as Donna Martin-Silver for the pilot. However, Spelling dropped out for several reasons, including conflicts over reaching a salary agreement and recently giving birth to her daughter right before filming began."
                    },
                    {
                        "trivia": "The character of Erin Silver, who was Kelly Taylor and David Silver's half sister in the original show, was instead going to be named Daphne Silver. Daphne was supposed to be a distant cousin of Kelly and David. However, after reconsidering having more ties to the original _\"Beverly Hills, 90210\" (1990)_ (qv), the writers decided to change Daphne's name to Erin, so they could create a story line involving their younger sister."
                    },
                    {
                        "trivia": "When Hannah Zuckerman-Vasquez appears on the Blaze News, Mr. Matthews jokingly asks, \"What is she, like, 30?\" This is a nod to 'Gabrielle Carteris' (qv), who played Hannah's mother Andrea Zuckerman in the original _\"Beverly Hills, 90210\" (1990)_ (qv) series. Carteris was nearly 30 playing high school junior Andrea (editor of the Blaze newspaper) when her series began. 'Hallee Hirsh' (qv) was in her early 20's when she played freshman Hannah in this episode."
                    },
                    {
                        "plot": "The Wilson family arrives in Beverly Hills, after Harrison \"Harry\" Wilson takes a job as the principal at West Beverly High School, while his children, Annie and Dixon, attend the school during their first week much to the awkward circumstances of their father watching over them, while Harry and his photographer wife, Debbie, also keep a close eye on Harry's washed-up, alcoholic, actress mother, Tabitha. For Annie and Dixon, the school is one big culture shock for Annie, a sweet and friendly girl with a passion for the theater, and Dixon, a star athlete and scholar who was adopted by the Wilson family after they took him in as a foster child. Annie and Dixon have a close sibling relationship, which they'll need to help them cope with all the new cliques and classmates, including Naomi Clark, a hot and stereotypical spoiled rich girl who believes that money buys everything; Ethan Ward, Annie's former boyfriend from Kansas who's now Naomi's boyfriend, and a popular lacrosse star whose abilities rival Dixon's; Navid Shirazi, an aspiring student reporter who heads up the school's daily TV newscast; and Erin Silver, a rebel and wanna-be socialite who produces and stars in a YouTube-type video series, and who develops a crush on Dixon. Adrianna is a fellow student and theater \"goddess\" who is Naomi Clark's best friend... and Ethan Ward's secret girlfriend, and who has a serious drug addiction; George Evans is an arrogant West Beverly High student, who takes an instant dislike to Dixon because of his race (Dixon is black). Wendy is \"sexy vixen\" student at West Beverly Hills High who takes every advantage of her looks; Ty Collins is another student and theater major. Even the faculty seems hip and sophisticated at the school whom include the smart and funny teacher Ryan Matthews, beautiful guidance counselor Kelly Taylor, and successful theater actress-turned-high school-musical director Brenda Walsh. The Wilson family has just begun to realize how much their lives are about to change."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "locations": "El Segundo High School - 640 Main Street, El Segundo, California, USA"
                    },
                    {
                        "locations": "Torrance High School - 2200 W. Carson Street, Torrance, California, USA"
                    },
                    {
                        "runtimes": "41"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:2 September 2008"
                    },
                    {
                        "release dates": "USA:2 September 2008"
                    },
                    {
                        "release dates": "Australia:8 September 2008"
                    },
                    {
                        "release dates": "Ireland:6 November 2008"
                    },
                    {
                        "release dates": "Sweden:21 November 2008"
                    },
                    {
                        "release dates": "Netherlands:2 January 2009"
                    },
                    {
                        "release dates": "UK:26 January 2009"
                    },
                    {
                        "release dates": "Germany:18 April 2009"
                    },
                    {
                        "release dates": "Estonia:15 June 2009"
                    },
                    {
                        "release dates": "Hungary:26 June 2009"
                    },
                    {
                        "release dates": "Greece:September 2009"
                    },
                    {
                        "release dates": "Japan:3 April 2010"
                    },
                    {
                        "release dates": "Belgium:5 January 2013"
                    }],
                    "phonetic_code": "W6535",
                    "id": 33644,
                    "title": "We're Not in Kansas Anymore",
                    "season_nr": 1,
                    "production_year": 2008
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Jet Set",
                "id": "4.36209",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "798af7c4271817a63822ae36113f0982",
                    "full_info": [
                    {
                        "quotes": "Tabitha Wilson: Well, my damn computer froze up again.::Harry Wilson: What'd you spill on it this time, Mom?::Tabitha Wilson: Scotch. I mean, iced tea."
                    },
                    {
                        "quotes": "Tabitha Wilson: I need to finish my memoirs before my friend Virginia does. We've slept with all the same people."
                    },
                    {
                        "quotes": "Ryan Matthews: Adrianna, what's up with you? Are you okay?::Adrianna Duncan: Yeah, I'm just distracted. I have this really big audition for this movie this week and I just haven't been able to sleep.::Ryan Matthews: And if you don't get it, what then?::Adrianna Duncan: Well, then I'd be in a movie, make lots of money.::Ryan Matthews: So what, you can buy a new cell phone or maybe a fancy pair of shoes? Maybe an expensive car you don't really need?::Adrianna Duncan: No, so I can pay the mortgage 'cause my mom can't."
                    },
                    {
                        "quotes": "Erin Silver: [to Annie] Okay, what was that?::Annie Wilson: What?::Erin Silver: What? Ty Collins just practically put his tongue in your mouth. That's what.::Annie Wilson: Shut up!::Annie Wilson: Okay, you are obviously too messed up to see what's right in front of you, so let me be your eyes. Ty Collins is into you? You should be into Ty Collins or so to speak.::Annie Wilson: Okay, can you just give me one second because my old relationship ended 6 hours ago.::Erin Silver: Okay, the cure for a breakup is a hookup."
                    },
                    {
                        "quotes": "Annie Wilson: He has a jet, Silver, a jet. Okay? It's the coolest thing ever. It's like \"Pretty Woman\", but I'm not a whore."
                    },
                    {
                        "quotes": "Annie Wilson: [to Silver] Hey, cool tattoo. What does it mean?::Erin Silver: It's the Chinese symbol for friendship 'cause you know, friends are cool.::Annie Wilson: Naomi has the same one.::Erin Silver: Yeah. All right, in 8th grade, my dad had an affair with my mom's best friend. I was... God, I was so angry you know, so unbelievably scared she'd find out, you know and she'd get a divorce or start drinking again. So, I... I didn't tell anybody, I kept it a secret, but then it started eating away at me, and I just... I had to tell someone. So I told my friend, Naomi. She promised me that she wouldn't tell anyone, so she told everyone.::Annie Wilson: Why would she do that?::Erin Silver: Because she needs to know more than anyone else. Because it gives her power to tear people down. So, my mom found out. She confronted my dad and everything that I prayed wouldn't happen happened. So now it's my greatest pleasure to make her pay for it."
                    },
                    {
                        "quotes": "Harry Wilson: [to Dixon] And I want to apologize to you. Wasn't fair of me to ask you to give up your buddies. I was on a team once. I know how it works.::Dixon Wilson: You know, I'm sorry I disobeyed you, you know? I'm still trying to find my way around here, you know?::Harry Wilson: I'm trying to figure out when to be principal and when to be your dad.::Dixon Wilson: You know, I think I like my dad more than my principal.::Harry Wilson: You might not when you hear his punishment."
                    },
                    {
                        "quotes": "Harry Wilson: And this thing with Tracy, I wish I knew what to do, but I don't. And am I curious to know the kid's okay? Absolutely. But being an adoptive father, would I want Dixon's birth parents around us? No way.::Debbie Wilson: Well, look, Dixon is a teenager. This is a man. But, before you do anything about that, I think you really need to figure out how you want to handle things with Tracy.::Harry Wilson: I don't know and I am the first to admit I was not the greatest guy back then.::Debbie Wilson: Honestly, I'm more concerned about the guy you are now. So just take your time and figure out how you want to handle this."
                    },
                    {
                        "quotes": "Naomi Clark: [to Ethan] Are you breaking up with me?::Ethan Ward: I'm breaking up with us."
                    },
                    {
                        "soundtrack": "\"Ain't We Famous\" (uncredited) Written and Performed by 'Brendan McCreary' (qv)"
                    },
                    {
                        "soundtrack": "\"Come Out of the Shade\" (uncredited) Performed by 'The Perishers' (qv)"
                    },
                    {
                        "soundtrack": "\"Coming Home\" (uncredited) Performed by 'The 88' (qv)"
                    },
                    {
                        "soundtrack": "\"Daydreamer\" (uncredited) Performed by 'Adele (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Gravity\" (uncredited) Performed by Luscious Redhead"
                    },
                    {
                        "soundtrack": "\"Great DJ\" (uncredited) Written by 'Katie White (XIII)' (qv) and 'Jules De Martino' (qv) Performed by 'The Ting Tings' (qv)"
                    },
                    {
                        "soundtrack": "\"I Always Knew\" (uncredited) Performed by 'Jem (II)' (qv)"
                    },
                    {
                        "soundtrack": "\"I'm Yours\" (uncredited) Performed by 'Jason Mraz' (qv)"
                    },
                    {
                        "soundtrack": "\"Let It Rock\" (uncredited) Performed by 'Kevin Rudolf' (qv) and 'Lil' Wayne' (qv)"
                    },
                    {
                        "soundtrack": "\"Live Forever\" (uncredited) Performed by 'Brendan McCreary' (qv)"
                    },
                    {
                        "soundtrack": "\"Lucid Dreams\" (uncredited) Performed by 'Franz Ferdinand (II)' (qv)"
                    },
                    {
                        "soundtrack": "\"Never Gets Enough\" (uncredited) Performed by Luscious Redhead"
                    },
                    {
                        "soundtrack": "\"Outlaw Mix 2\" (uncredited) Performed by Astronaut on Vacation"
                    },
                    {
                        "soundtrack": "\"Shake It\" (uncredited) Performed by Metro Station"
                    },
                    {
                        "soundtrack": "\"Try It Again\" (uncredited) Performed by 'The Hives' (qv)"
                    },
                    {
                        "soundtrack": "\"Young One\" (uncredited) Performed by Mackabella"
                    },
                    {
                        "soundtrack": "\"Touch Me\" (uncredited) Performed by 'Adam Gregory (II)' (qv)"
                    },
                    {
                        "soundtrack": "\"Fly Away\" (uncredited) Performed by 'Jessica Lowndes' (qv)"
                    },
                    {
                        "trivia": "Adrianna, played by 'Jessica Lowndes' (qv), is seen waiting to audition for a movie role and holding Jessica's actual headshot."
                    },
                    {
                        "trivia": "SPOILER: When Silver is telling Annie about how she and Naomi used to be friends,the hair in front of her ear changes position. When you can only see Silver's face, it is in front of her ear, when you can only see Annie's face it is behind her ear."
                    },
                    {
                        "plot": "Naomi finds herself in trouble when she fails an assignment, and Ryan and Kelly bring the issue to Harry's attention, while Harry struggles with a disturbing revelation about the result of a secret tryst with Naomi's mother, Tracy, from many years ago. Meanwhile, Dixon learns more about Navid when they team up to try to pull a school prank against Palisades High. Annie meets a potential love interest in the form of drama student Ty Collins, who turns out to be the wealthiest student at West Beverly, and who spirits her away for San Francisco for the evening. Silver posts the story about Ethan's infidelity with Naomi on her Internet blog, while Adrianna continues her self-destructive slide into drugs and debauchery. Also, Ryan tries to ask Kelly out on a date, but she has to find a babysitter first for her four-year-old son, and former West Beverly alumni Brenda Walsh, now a successful Broadway and London theater director, arrives back in town to help put on a new school play."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "locations": "El Segundo High School - 640 Main Street, El Segundo, California, USA"
                    },
                    {
                        "locations": "Torrance High School - 2200 W. Carson Street, Torrance, California, USA"
                    },
                    {
                        "runtimes": "41"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:2 September 2008"
                    },
                    {
                        "release dates": "USA:2 September 2008"
                    },
                    {
                        "release dates": "Australia:8 September 2008"
                    },
                    {
                        "release dates": "Ireland:6 November 2008"
                    },
                    {
                        "release dates": "Netherlands:9 January 2009"
                    },
                    {
                        "release dates": "UK:26 January 2009"
                    },
                    {
                        "release dates": "Germany:25 April 2009"
                    },
                    {
                        "release dates": "Hungary:3 July 2009"
                    },
                    {
                        "release dates": "Japan:10 April 2010"
                    }],
                    "phonetic_code": "J323",
                    "id": 33626,
                    "title": "The Jet Set",
                    "season_nr": 1,
                    "production_year": 2008
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "5 Go Dating",
                "id": "4.36644",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "292c8acf34ed7e86431439c3519930d9",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:1 January 2001"
                    }],
                    "phonetic_code": "G352",
                    "id": 23856,
                    "series_years": "2001-2002",
                    "title": "5 Go Dating",
                    "production_year": 2001
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Pilot",
                "id": "4.39509",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "9850c20878e39bc646b4428249398999",
                    "full_info": [
                    {
                        "goofs": "CONT: When Caroline is telling Max that the asking price for a cupcake is 7$ in Manhattan and they should sell it for 7$ instead of 5 and pocket the difference, when the camera is turned to Max you can see the price on the tray at the diner to be 1.50$ for cupcakes."
                    },
                    {
                        "quotes": "Earl: You might as well be a night maid in the Schwarzenegger house.::Caroline Channing: What?::Earl: You've been screwed."
                    },
                    {
                        "quotes": "Customer: [referring to the waitress who is having sex in the fridge] Where's our other waitress?::Max Black: She's coming."
                    },
                    {
                        "quotes": "[first lines]::Hipster #1: Excuse me.::[while Snapping His Fingers Obnoxiously To Get Max's Attention]::Hipster #1: Waitress. Dude!::Max Black: Hi, what can I get ya?::Hipster #1: We need some...::Max Black: [Cuts Off Hipster #1 By Snapping Her Fingers Obnoxiously In His Face] Is That Annoying?::[Continues To Snap Her Fingers In Hipster #1's Face While Talking]::Max Black: Is that obnoxious and rude? Would you find that distracting if someone did that to you while you were working? Oh you don't have a job sorry.::Hipster #2: Damn, dude, she burned you.::Max Black: Oh,::[Snaps Her Fingers In Hipster #2's Face]::Max Black: No hipster. No. Do not think we're on the same team we have nothing in common. I wear knit hats when it's cold out, you wear knit hats because of Coldplay. You have tattoos to piss off your dad, my dad doesn't know he's my dad. And, finally, you think::[Snaps Her Fingers Obnoxiously In Hipster #1's Face Again]::Max Black: this is a sound that gets you service, I think::[Snaps Her Fingers Obnoxiously In Hipster #1's Face Again]::Max Black: this is the sound that dries up my vagina.::Hipster #1: The other waitress disappeared, the Russian one, we need horseradish.::Hipster #2: Please.::Max Black: That ladies is how you treat a waitress."
                    },
                    {
                        "soundtrack": "\"Second Chance\" (uncredited) Written by Bjorn Daniel Arne Yttling, Peter Andreas Moren, John Thomas Daniel Eriksson Performed by Peter Bjorn and John"
                    },
                    {
                        "soundtrack": "\"Second Chance\" Performed by 'Peter Bjorn and John' (qv)"
                    },
                    {
                        "trivia": "Final tally for cupcake business venture: $387.25."
                    },
                    {
                        "trivia": "Caroline mentioned that she borrowed shoes from Sophie. Sophie hadn't moved in yet."
                    },
                    {
                        "plot": "Experienced waitress Max meets her new co-worker, former rich-girl Caroline, who team up for a new business venture."
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "Singapore:PG13"
                    },
                    {
                        "certificates": "USA:Not Rated"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "OFM:HDCAM"
                    },
                    {
                        "tech info": "PFM:35 mm"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "Canada:19 September 2011"
                    },
                    {
                        "release dates": "USA:19 September 2011"
                    },
                    {
                        "release dates": "Spain:28 October 2011"
                    },
                    {
                        "release dates": "Finland:4 January 2012"
                    },
                    {
                        "release dates": "Netherlands:12 March 2012"
                    },
                    {
                        "release dates": "UK:19 April 2012"
                    },
                    {
                        "release dates": "Germany:28 August 2012"
                    },
                    {
                        "release dates": "Sweden:13 September 2012"
                    },
                    {
                        "release dates": "France:30 September 2012"
                    },
                    {
                        "release dates": "Czech Republic:2 September 2013"
                    },
                    {
                        "release dates": "Japan:16 October 2013"
                    },
                    {
                        "release dates": "Hungary:18 July 2014"
                    }],
                    "phonetic_code": "P43",
                    "id": 11151,
                    "title": "Pilot",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "8 Out of 10 Cats",
                "id": "4.39728",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "172dc1e3c417f331871b6929c7f5627a",
                    "full_info": [
                    {
                        "trivia": "The name 8 out of 10 cats come from the old Whiskas advert '8 out of 10 cats prefer Whiskas to any other cat food'"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Game-Show"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "BBC Television Centre, Wood Lane, Shepherd's Bush, London, England, UK"
                    },
                    {
                        "runtimes": "24"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "UK:3 June 2005"
                    }],
                    "phonetic_code": "O3123",
                    "id": 32611,
                    "series_years": "2005-????",
                    "title": "8 Out of 10 Cats",
                    "production_year": 2005
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "2 Broke Girls",
                "id": "4.42890",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (DVD box title)",
                        "kind": "tv series",
                        "md5sum": "5204353a45665811d7857b31c3f468b8",
                        "aka_title": "2 Broke Girl$",
                        "phonetic_code": "B6264",
                        "production_year": 2012
                    },
                    {
                        "note": "(USA) (alternative spelling)",
                        "kind": "tv series",
                        "md5sum": "b651b45e5a138fd467016cc05d90491b",
                        "aka_title": "Two Broke Girls",
                        "phonetic_code": "T1626",
                        "production_year": 2011
                    },
                    {
                        "note": "(USA) (alternative title)",
                        "kind": "tv series",
                        "md5sum": "2d60626986e8918b578f315228cfe13d",
                        "aka_title": "2 Broke Girl$",
                        "phonetic_code": "B6264",
                        "production_year": 2011
                    },
                    {
                        "note": "(Germany) (première title)",
                        "kind": "tv series",
                        "md5sum": "ed316f9413ca9b131915653360bb1bb8",
                        "aka_title": "2 Broke Girls - Pleite in Brooklyn",
                        "phonetic_code": "B6264",
                        "production_year": 2012
                    },
                    {
                        "note": "(UK) (imdb display title)",
                        "kind": "tv series",
                        "md5sum": "10262632194286d3dddc8e171fee7977",
                        "aka_title": "2 Broke Girls",
                        "phonetic_code": "B6264",
                        "production_year": 2011
                    }],
                    "kind": "tv series",
                    "md5sum": "10262632194286d3dddc8e171fee7977",
                    "full_info": [
                    {
                        "goofs": "FACT: Sophie Kaczynski's name should really be Zofia Kaczynska. The form 'Sophie' does not exist in Polish, and because Slavic surnames ending in '-ski' are grammatically considered adjectives, Zofia's surname should be the feminine form 'Kaczynska'. (In mitigation, the character may have dropped 'Zofia' in favor of the more English-sounding 'Sophie', but this doesn't explain the faulty surname.)"
                    },
                    {
                        "goofs": "FAIR: Oleg only wears a singlet on his torso when cooking in the kitchen of Han's diner. Dressing in this way would violate food hygiene regulations, which require cooks, chefs, and kitchen hands to be adequately covered in order to prevent hair and sweat from contaminating the food and beverages, however the quality, hygiene, freshness of the food, and overall cleanliness of the diner (or lack thereof of any of that) has been a running gag throughout the series."
                    },
                    {
                        "quotes": "Caroline Channing: [to Oleg, who is standing at their apartment door wearing only a Kimono robe] Oleg, what are you doing here? And you put the \"oh no\" in Kimono."
                    },
                    {
                        "quotes": "[repeated line]::Sophie Kachinsky: I'll be in my booth!"
                    },
                    {
                        "soundtrack": "\"Second Chance\" Performed by 'Peter Bjorn and John' (qv)"
                    },
                    {
                        "trivia": "Every episode name starts with \"And\", as in \"2 Broke Girls and...\" except for the pilot which was titled simply \"Pilot\"."
                    },
                    {
                        "trivia": "Despite their characters having accents and being from other countries, 'Jonathan Kite' (qv), 'Jennifer Coolidge' (qv), and 'Matthew Moy' (qv) are all born and raised in America and speak with American accents. Moy, though portrayed as Korean, is actually of Chinese descent."
                    },
                    {
                        "trivia": "One of the writers of the show, 'Whitney Cummings' (qv), also had a short-lived TV show called _\"Whitney\" (2011)_ (qv) that was canceled 2013. She is a stand-up comedian and is only 4 years older than 'Kat Dennings' (qv) and 4 years older than 'Beth Behrs' (qv)."
                    },
                    {
                        "trivia": "In real life, 'Beth Behrs' (qv) and 'Kat Dennings' (qv) are best friends."
                    },
                    {
                        "trivia": "None of the episodes have episode title cards."
                    },
                    {
                        "trivia": "Many items and signs decorating the girls' apartment were also used in _\"The New Adventures of Old Christine\" (2006)_ (qv) decorating the living room of 'Julia Louis-Dreyfus' (qv)."
                    },
                    {
                        "trivia": "In contrast to Max, who likes to drink and do drugs (namely marijuana), Kat Dennings actually does not smoke, drink, or do drugs, and does not like to be around those who do."
                    },
                    {
                        "trivia": "Jonathan Kite is 18 years younger than Jennifer Coolidge."
                    },
                    {
                        "trivia": "It was nominated for three 2012 Emmy Awards, winning for Art Direction."
                    },
                    {
                        "trivia": "Kim Kardashian made a guest apearance in the show."
                    },
                    {
                        "copyright holder": "Warner Bros. Entertainment Inc."
                    },
                    {
                        "production process protocol": "D'ARminio, Aubrey. \"One Killer Cupcake\". In: \"TV Guide\" (USA), Vol. 61, Iss. 38, 23 September 2013, Pg. 55, (MG)"
                    },
                    {
                        "production process protocol": "Roush, Matt. \"Funniest New Duo: 2 Broke Girls\". In: \"TV Guide\" (USA), 12 September 2011, Pg. 22, (MG)"
                    },
                    {
                        "plot": "Sassy, streetwise Max works two jobs just to get by, one of which is waiting tables during the night shift at the retro-hip Williamsburg Diner. Sophisticated Caroline is an uptown trust fund princess who's having a run of bad luck that forces her to reluctantly give waitressing a shot. At first, Max sees Caroline as yet another in a long line of inept servers she must cover for, but she's surprised to find that Caroline has as much substance as she does style. When Caroline discovers Max's knack for baking amazing cupcakes, she sees a lucrative future for them, but they first need to raise the start-up money."
                    },
                    {
                        "certificates": "Australia:PG"
                    },
                    {
                        "certificates": "Australia:M"
                    },
                    {
                        "certificates": "Brazil:12"
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Finland:K-7"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "Ireland:15"
                    },
                    {
                        "certificates": "Mexico:B"
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "Singapore:PG13"
                    },
                    {
                        "certificates": "Sweden:11"
                    },
                    {
                        "certificates": "UK:15"
                    },
                    {
                        "certificates": "UK:12"
                    },
                    {
                        "certificates": "USA:Not Rated"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "languages": "Korean"
                    },
                    {
                        "languages": "Yiddish"
                    },
                    {
                        "languages": "Hebrew"
                    },
                    {
                        "languages": "Spanish"
                    },
                    {
                        "languages": "Arabic"
                    },
                    {
                        "languages": "Ukrainian"
                    },
                    {
                        "locations": "Los Angeles, California, USA"
                    },
                    {
                        "locations": "Stage 18, Warner Brothers Burbank Studios - 4000 Warner Boulevard, Burbank, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "CAM:Sony CineAlta HDW-F900, Panavision Primo Lenses"
                    },
                    {
                        "tech info": "LAB:Warner Bros. Motion Picture Imaging, Burbank (CA), USA"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:19 September 2011"
                    },
                    {
                        "taglines": "More Cupid, Cupcakes and Comedy In Season 3! (Season 3 DVD)"
                    },
                    {
                        "taglines": "Business Smarts and Big Hearts - A Recipe For Sucess In Season 2 (Season 2 DVD)"
                    }],
                    "phonetic_code": "B6264",
                    "id": 11014,
                    "series_years": "2011-????",
                    "title": "2 Broke Girls",
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "90210",
                "id": "4.45590",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(USA) (working title)",
                        "kind": "tv series",
                        "md5sum": "fcffa0aab342644ff4bcfa9624b65c8b",
                        "aka_title": "90210: The Next Generation",
                        "phonetic_code": "T5232",
                        "production_year": 2008
                    },
                    {
                        "note": "(USA) (working title)",
                        "kind": "tv series",
                        "md5sum": "814b2b10377b9d23c5fc1f6055d7df13",
                        "aka_title": "Beverly Hills, 90210: The Next Generation",
                        "phonetic_code": "B1642",
                        "production_year": 2008
                    }],
                    "kind": "tv series",
                    "md5sum": "cd430c1df64804d62d2508d8349efbe5",
                    "full_info": [
                    {
                        "soundtrack": "\"We Run LA\" Produced and Written by 'Louie Rubio' (qv) & 'Alex Shultz (III)' (qv)"
                    },
                    {
                        "trivia": "'Dustin Milligan (I)' (qv) was the first actor to be cast."
                    },
                    {
                        "trivia": "'Hilary Duff' (qv) was first offered the part of Annie Wilson but declined the role. 'Shenae Grimes-Beech' (qv) was then cast as Annie."
                    },
                    {
                        "trivia": "The soft drink Dr. Pepper is featured prominently in many episodes, usually at the Peach Pit."
                    },
                    {
                        "trivia": "'AnnaLynne McCord' (qv)'s character, Naomi Clark, had her boyfriend cheat on her after prom in the first season. McCord also had a brief role on _\"The O.C.\" (2003)_ (qv) as a prom goer who is caught with Marissa's boyfriend cheating on her."
                    },
                    {
                        "trivia": "Cast members from the original _\"Beverly Hills, 90210\" (1990)_ (qv) to appear on this follow-up included: 'Jennie Garth' (qv), 'Shannen Doherty' (qv), 'Tori Spelling' (qv), 'Ann Gillespie' (qv), and 'Joe E. Tata' (qv). 'Jason Priestley (I)' (qv) directed an episode."
                    },
                    {
                        "trivia": "Teddy Montgomery was played by 32-year-old Trevor Donovan, who was about fourteen years older than his character. This was similarly done on the original show with 'Luke Perry (I)' (qv), at age 28, playing a high school junior."
                    },
                    {
                        "trivia": "'Jessica Stroup' (qv), who played (Erin) Silver, originally auditioned for the role of Annie Wilson."
                    },
                    {
                        "trivia": "The producers claimed that when they saw 'Shenae Grimes-Beech' (qv)'s auditioning tape, they immediately knew she would be perfect for the role of Annie Wilson."
                    },
                    {
                        "trivia": "'AnnaLynne McCord' (qv) admitted that she was initially reluctant to take the role of Naomi Clark."
                    },
                    {
                        "trivia": "'Jessica Lowndes' (qv) was originally contracted for a maximum of four episodes only and wound up being on every episode but one."
                    },
                    {
                        "trivia": "'Tristan Mack Wilds' (qv) was the last original main character cast. When he came in, the cast and crew were already busy shooting promos."
                    },
                    {
                        "trivia": "When asked to describe his character, 'Tristan Mack Wilds' (qv) called Dixon Wilson a mixture of Ferris Bueller, the Fresh Prince, and Zack Morris."
                    },
                    {
                        "trivia": "Original cast member 'Dustin Milligan (I)' (qv) was dropped from the show by the producers after Season 1, and he was not asked to return for Season 2."
                    },
                    {
                        "trivia": "The show was cancelled on February 28, 2013."
                    },
                    {
                        "trivia": "In one episode, Dixon and Navid and a group of other people cross the street with a sign saying not to walk."
                    },
                    {
                        "trivia": "In an earlier episode, Naomi shows up to school in sweats and UGG boots while Annie says, \"Is she wearing UGG boots? What is it? 2002?\" In the same season a few episodes later, Annie is seen sitting on her couch at home wearing gold UGG boots herself."
                    },
                    {
                        "trivia": "SPOILER: At the end of Season 3, Annie was planning on attending Carnegie Mellon University, Liam was going to go to Drexel University, and they were going to live together. While both schools are in Pennsylvania, Drexel is in Philadelphia and Carnegie Mellon is in Pittsburgh, which is roughly a five-hour drive from each other."
                    },
                    {
                        "trivia": "The first season focused on paying tribute to the original series, however, after the first season barely got picked up for another season, the show got new producers who changed the entire direction of the show, and lots of elements of the original series were dropped."
                    },
                    {
                        "trivia": "The house bought by Naomi and then by her sister, Jen, is the same house Nolan Ross bought on TV series _\"Revenge\" (2011)_ (qv). Both shows take place across the country from each other, but both are at locations with a beach near by _\"Revenge\" (2011)_ (qv) is set in the Hamptons, which is on the east coast; _\"90210\" (2008)_ (qv) is set in Beverly Hills, which is on the west coast."
                    },
                    {
                        "trivia": "'Aimee Teegarden' (qv) (Rhonda) from Season 1 and 'Matt Lanter' (qv) (Liam) both starred in _\"Star-Crossed\" (2014)_ (qv) together as love interests."
                    },
                    {
                        "trivia": "'Jessica Stroup' (qv), 'Shenae Grimes-Beech' (qv), and 'AnnaLynne McCord' (qv) appeared in every single episode."
                    },
                    {
                        "trivia": "The school featured as West Beverly High School is the same school lot used in _\"Beverly Hills, 90210\" (1990)_ (qv), _\"Buffy the Vampire Slayer\" (1997)_ (qv), _She's All That (1999)_ (qv), and _Not Another Teen Movie (2001)_ (qv)."
                    },
                    {
                        "trivia": "Annie and Dixon's grandmother, Tabitha, played by 'Jessica Walter (I)' (qv) and Ivy's mom, Laurel, played by 'Kelly Lynch (I)' (qv) share the same birthday."
                    },
                    {
                        "trivia": "'Justin Deeley' (qv), who played Austin in Season 4 and 5, appeared in the last episode of Season 3 as a stripper named Terry."
                    },
                    {
                        "trivia": "'Jessica Stroup' (qv) was driving on the road when she received a call that she was cast as Erin Silver on the show, and she was so excited that she almost got pulled over."
                    },
                    {
                        "trivia": "'Jessica Stroup' (qv) and 'Shenae Grimes-Beech' (qv) are good friends in real life as well."
                    },
                    {
                        "trivia": "'Jessica Stroup' (qv) auditioned for the role of Annie Wilson, but believed she was not Midwestern enough."
                    },
                    {
                        "trivia": "_\"90210\" (2008)_ (qv) was on the air for five years, which was half as many years as the original _\"Beverly Hills, 90210\" (1990)_ (qv)."
                    },
                    {
                        "trivia": "Upon its first season, _\"90210\" (2008)_ (qv) was heavily criticized for its three leading actresses being considerably thin and underweight (considering their height). 'Jessica Stroup' (qv), at 5'8,\" weighed a mere 100 lbs, approximately; 'Shenae Grimes-Beech' (qv), at 5'3,\" weighed approximately 90 lbs; 'AnnaLynne McCord' (qv), at 5'7,\" weighed approximately 110 lbs."
                    },
                    {
                        "trivia": "'Rob Estes' (qv), who plays Harry Wilson, previously played Kyle McBride on _\"Melrose Place\" (1992)_ (qv), which is a spin-off of _\"Beverly Hills, 90210\" (1990)_ (qv), the show's predecessor."
                    },
                    {
                        "trivia": "'Jessica Lowndes' (qv) and 'AnnaLynne McCord' (qv) have both appeared on the television show _\"Greek\" (2007)_ (qv) and the film _The Haunting of Molly Hartley (2008)_ (qv)"
                    },
                    {
                        "filming dates": "30 June 2008 - ?"
                    },
                    {
                        "printed media reviews": "Roush, Matt. \"That's Rich: CW's Brat Pack\". In: \"TV Guide\" (USA), Vol. 57, Iss. 36, 15 September 2008, Pg. 15, (MG)"
                    },
                    {
                        "essays": "Holbrook, Damian. \"90210 Tackles Hot Topics\". In: \"TV Guide\" (USA), Vol. 57, Iss. 19, 11 May 2009, Pg. 20, (MG)"
                    },
                    {
                        "interviews": "Holbrook, Damian. \"Teddy's Big Day Out\". In: \"TV Guide\" (USA), Vol. 58, Iss. 44, 1 November 2010, Pg. 27, (MG)"
                    },
                    {
                        "interviews": "Parker, Mike. \"a conversaation with 90210's Brandon Michael Vayda\". In: \"Entertainment Examiner\", Examiner.com, Iss. 20, 20 November 2008, Pg. 1, (MG)"
                    },
                    {
                        "production process protocol": "Desmond, Michael & Zepeda, Dana Meltzzer. \"Behind the Scenes: 90210\". In: \"TV Guide\" (USA), Vol. 57, Iss. 33, 24 August 2009, Pg. 18, (MG)"
                    },
                    {
                        "production process protocol": "Gilbert, Gerard. \"A new term at Beverly Hills High\". In: \"The Independent Arts & Books\" (UK), Independent News & Media Limited, Vol. 6915, 12 December 2008, Pg. 38 - 39, (MG)"
                    },
                    {
                        "production process protocol": "Holbrook, Damian. \"90210 Hits 100\". In: \"TV Guide\" (USA), Vol. 60, Iss. 49, 3 December 2012, Pg. 29, (MG)"
                    },
                    {
                        "plot": "Annie and Dixon Wilson move from Kansas to the very wealthy area of Beverly Hills, and begin attending the famed West Beverly High School in the 90210 zip code. They quickly encounter queen bee Naomi, rebel Silver, troubled Adrianna and others as the drama unfolds in 90210."
                    },
                    {
                        "certificates": "Australia:M"
                    },
                    {
                        "certificates": "Brazil:14"
                    },
                    {
                        "certificates": "Brazil:16"
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:14A"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "certificates": "New Zealand:M"
                    },
                    {
                        "certificates": "UK:15"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Drama"
                    },
                    {
                        "genres": "Romance"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Beverly Hills, California, USA"
                    },
                    {
                        "locations": "Mount St. Mary's College - 12001 Chalon Road, Bel Air, Los Angeles, California, USA"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "locations": "Tropicana Bar, Hollywood Roosevelt Hotel - 7000 Hollywood Blvd., Hollywood, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "USA:60"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Genesis HD Camera"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "USA:2 September 2008"
                    },
                    {
                        "taglines": "There's a new class at West Beverly Hills High..."
                    },
                    {
                        "taglines": "New Drama. Same Zip Code."
                    },
                    {
                        "taglines": "You Wanna Live In The Zip, You've Gotta Live By The Code"
                    }],
                    "id": 33539,
                    "series_years": "2008-2013",
                    "title": "90210",
                    "production_year": 2008
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "And the Soft Opening",
                "id": "4.46799",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "f0e0a8eb028427ba6f5480f3bddbba56",
                    "full_info": [
                    {
                        "quotes": "Earl: When my first jazz album didn't sell, I turned to a life of drink, drugs and loose women. Sometimes things just work out right."
                    },
                    {
                        "soundtrack": "\"Second Chance\" (uncredited) Written by Bjorn Daniel Arne Yttling, Peter Andreas Moren, John Thomas Daniel Eriksson Performed by Peter Bjorn and John"
                    },
                    {
                        "soundtrack": "\"Knockin' on Heaven's Door\" Written by 'Bob Dylan' (qv) Performed by 'Robert McAtee' (qv)"
                    },
                    {
                        "soundtrack": "\"Second Chance\" Performed by 'Peter Bjorn and John' (qv)"
                    },
                    {
                        "trivia": "Final tally for cupcake business venture: $725.00."
                    },
                    {
                        "plot": "Max and Caroline are selling cupcakes out of the store room in the diner which has a window where the customers can walk up. And when their first customer dies, they're worried that it might have a negative affect on their business. But it turns out the man was a rock star and a lot of his fans show up where he died paying homage to him and buying the cupcakes. Han upon seeing how well they are doing and that he's losing business because of them decides to ask them to pay rent but he already agreed not to charge them."
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "certificates": "USA:Not Rated"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Warner Brothers Burbank Studios - 4000 Warner Boulevard, Burbank, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "Canada:23 September 2013"
                    },
                    {
                        "release dates": "USA:23 September 2013"
                    },
                    {
                        "release dates": "UK:27 November 2013"
                    },
                    {
                        "release dates": "Finland:9 January 2014"
                    },
                    {
                        "release dates": "Hungary:22 January 2015"
                    },
                    {
                        "release dates": "Japan:30 August 2015"
                    }],
                    "phonetic_code": "A5321",
                    "id": 11129,
                    "title": "And the Soft Opening",
                    "season_nr": 3,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "One Party Can Ruin Your Whole Summer",
                "id": "4.71318",
                "label": "production",
                "props":
                {
                    "episode_nr": 24,
                    "kind": "episode",
                    "md5sum": "18694ee6d534a89ab260167b0d74e2b2",
                    "full_info": [
                    {
                        "goofs": "CONT: Silver jumps in the pool, dressed in her prom dress, and 5 minutes later her hair and dress is all dry, when she's running after Ethan."
                    },
                    {
                        "soundtrack": "\"The Only One\" (uncredited) by Manchester Orchestra"
                    },
                    {
                        "soundtrack": "\"Beautiful You \" Written By 'Jesse Pruett' (qv) Performed By 'Parker Theory'"
                    },
                    {
                        "soundtrack": "\"Panic\" (uncredited) by The Boat People"
                    },
                    {
                        "soundtrack": "\"Beautiful People\" (uncredited)"
                    },
                    {
                        "soundtrack": "\"Bang Bang\" (uncredited) by 'K'Naan' (qv)"
                    },
                    {
                        "soundtrack": "\"Waking Up In Vegas\" (uncredited) by 'Katy Perry' (qv)"
                    },
                    {
                        "soundtrack": "\"Everyone's At It\" (uncredited) by Lilly Allen"
                    },
                    {
                        "soundtrack": "\"Superthug\" (uncredited) by 'Noreaga' (qv)"
                    },
                    {
                        "soundtrack": "\"Absolute\" (uncredited) by 'The Fray' (qv)"
                    },
                    {
                        "soundtrack": "\"Sugar\" (uncredited) by 'Flo Rida' (qv) feat. Wynter"
                    },
                    {
                        "soundtrack": "\"Back Again\" (uncredited) by 'Parachute' (qv)"
                    },
                    {
                        "soundtrack": "\"Let Go\" (uncredited) by Amy Bell feat. Genise"
                    },
                    {
                        "soundtrack": "\"The Funeral\" (uncredited) by 'Band of Horses' (qv)"
                    },
                    {
                        "soundtrack": "\"Let Go\" Written by Amy Correa Bell Performed by Amy Correa Bell"
                    },
                    {
                        "soundtrack": "\"Let Go\" Written & Performed by Amy Correa Bell"
                    },
                    {
                        "plot": "Adrianna and Navid are forced to make an impromptu exit from the prom when Adrianna goes into labor.  Brenda Walsh shows up at the hospital to lend emotional support as Adrianna's labor gets more difficult. Harry and Debbie also turn up at the hospital with Kelly to lend emotional support to Adrianna when she decides to give her baby up for adoption. Across town, in defiance of Harry's orders not to throw any post-prom party, Naomi and Liam decide to throw a party in Jen's house, which she does not approve of. There, Dixon confronts Ethan about Silver when he notices that Ethan might be developing romantic feelings for his girlfriend. When Liam arrives late for the party, Jen takes advantage of his rebellious state. However, Naomi confronts and accuses Annie of seducing her boyfriend. Beaten up and humiliated, Annie leaves the party in a rage. Later, while driving home, Annie runs over someone with her car in a hit-and-run. Liam later decides to confess that it was Jen who seduced him and not Annie. He is unfortunately grabbed by parole officers and sent away by his stepfather to a military academy. Jen is left behind to claim herself as Naomi and everyone's savior... with no one suspecting her true nature."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "locations": "145 N Rossmore Ave, Los Angeles, California, USA"
                    },
                    {
                        "locations": "El Segundo High School - 640 Main Street, El Segundo, California, USA"
                    },
                    {
                        "locations": "Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "42"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:19 May 2009"
                    },
                    {
                        "release dates": "USA:19 May 2009"
                    },
                    {
                        "release dates": "UK:July 2009"
                    },
                    {
                        "release dates": "Ireland:2 July 2009"
                    },
                    {
                        "release dates": "Greece:January 2010"
                    },
                    {
                        "release dates": "Hungary:2 January 2010"
                    },
                    {
                        "release dates": "Netherlands:24 January 2010"
                    },
                    {
                        "release dates": "Japan:11 September 2010"
                    },
                    {
                        "release dates": "Germany:27 September 2010"
                    }],
                    "phonetic_code": "O5163",
                    "id": 33604,
                    "title": "One Party Can Ruin Your Whole Summer",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "To New Beginnings!",
                "id": "4.91695",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "b610c2517b74b08a94507b0bb66acece",
                    "full_info": [
                    {
                        "goofs": "CONT: Toward the end of the episode, we can see the back of Teddy's car. The WBHH bumper sticker has clearly moved to the left and down from where it was in the flashback of the Season 1 finale."
                    },
                    {
                        "soundtrack": "\"Blue Eyes\" (uncredited) by Mika"
                    },
                    {
                        "soundtrack": "\"Cat & Mouse\" (uncredited) by Nikki & Rich"
                    },
                    {
                        "soundtrack": "\"Everybody Loves Me\" (uncredited) by 'OneRepublic' (qv)"
                    },
                    {
                        "soundtrack": "\"Freakalator\" (uncredited) by 'Soundmaster T' (qv)"
                    },
                    {
                        "soundtrack": "\"Good Stuff\" (uncredited) by Shawn Anthony"
                    },
                    {
                        "soundtrack": "\"I Don't Want You Back\" (uncredited) by 'Laura Izibor' (qv)"
                    },
                    {
                        "soundtrack": "\"In This Life\" (uncredited) by sheer.K"
                    },
                    {
                        "soundtrack": "\"Jack Nimble\" (uncredited) by Lady of the Sunshine"
                    },
                    {
                        "soundtrack": "\"Koop Island Blues\" (uncredited) by 'Koop' (qv) feat. 'Ane Brun' (qv)"
                    },
                    {
                        "soundtrack": "\"Lion's Roar\" (uncredited) by 'Asher Roth (I)' (qv) feat. 'Busta Rhymes' (qv)"
                    },
                    {
                        "soundtrack": "\"Magic\" (uncredited) by Vi"
                    },
                    {
                        "soundtrack": "\"Never Say Never\" (uncredited) by Khamelien"
                    },
                    {
                        "soundtrack": "\"See Through\" (uncredited) by 'Sofi Bonde' (qv)"
                    },
                    {
                        "soundtrack": "\"So Human\" (uncredited) by 'Lady Sovereign' (qv)"
                    },
                    {
                        "soundtrack": "\"Sunny Day\" (uncredited) by 'Joy Williams (III)' (qv)"
                    },
                    {
                        "soundtrack": "\"Wake Up\" (uncredited) by 'Sliimy' (qv)"
                    },
                    {
                        "plot": "During the summer, most of the students at West Beverly were forced to attend summer school after Annie anonymously called the police to report Naomi's post-prom party. During the last weekend of Labor Day, Naomi, Silver and Adrianna hang out at the Beverly Hills Beach club. There, Adrianna runs into an old boyfriend named Teddy Montgomery, a tennis player and new student, while Naomi finds him irresistible. Navid also plans on spending his first romantic night with Adrianna, but jealousy gets in the way.  Meanwhile, Annie has spent the summer isolating herself out of guilt for the hit-and-run accident that she committed, fearing that someone will discover her terrible secret."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Raleigh Manhattan Beach Studios - 1600 Rosecrans Avenue, Manhattan Beach, California, USA"
                    },
                    {
                        "locations": "325 Homewood Rd, Los Angeles, California, USA"
                    },
                    {
                        "locations": "Huntington Beach, California, USA"
                    },
                    {
                        "locations": "Hyatt Regency Huntington Beach Resort & Spa - 21500 Pacific Coast Highway Huntington Beach, California, USA"
                    },
                    {
                        "locations": "Torrance, California, USA"
                    },
                    {
                        "runtimes": "41"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "PFM:Digital"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:8 September 2009"
                    },
                    {
                        "release dates": "USA:8 September 2009"
                    },
                    {
                        "release dates": "UK:5 January 2010"
                    },
                    {
                        "release dates": "Netherlands:31 January 2010"
                    },
                    {
                        "release dates": "Italy:5 June 2010"
                    },
                    {
                        "release dates": "Greece:September 2010"
                    },
                    {
                        "release dates": "Japan:4 June 2011"
                    },
                    {
                        "release dates": "Hungary:19 March 2012"
                    }],
                    "phonetic_code": "T5125",
                    "id": 33635,
                    "title": "To New Beginnings!",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    }],
                    "season_nr": 2,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The One with the Bomb",
                "id": "4.127267",
                "label": "production",
                "props":
                {
                    "episode_nr": 10,
                    "kind": "episode",
                    "md5sum": "600fd7949426d78718f46837bef1a662",
                    "full_info": [
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "USA:18 January 2016"
                    }],
                    "phonetic_code": "O5315",
                    "id": 140674,
                    "title": "The One with the Bomb",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Pilot",
                "id": "4.145139",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "4bf251108dbd4ac15f514e3c5c48fc4d",
                    "full_info": [
                    {
                        "goofs": "MISC: About 12 seconds in, when the main character is boxing, \"she\" clutches the boxing bag, but the hands are clearly that of a male."
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "Germany:17 January 2016"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    },
                    {
                        "release dates": "Sweden:19 January 2016"
                    }],
                    "phonetic_code": "P43",
                    "id": 140671,
                    "title": "Pilot",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Murder in the First Class",
                "id": "4.145380",
                "label": "production",
                "props":
                {
                    "episode_nr": 8,
                    "kind": "episode",
                    "md5sum": "025b54eca56f310c4904940517dab22a",
                    "full_info": [
                    {
                        "runtimes": "19"
                    },
                    {
                        "release dates": "USA:18 January 2016"
                    }],
                    "phonetic_code": "M6365",
                    "id": 140669,
                    "title": "Murder in the First Class",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Famous Ventriloquist Did It",
                "id": "4.147368",
                "label": "production",
                "props":
                {
                    "episode_nr": 3,
                    "kind": "episode",
                    "md5sum": "3eafde6c5281560fd1e4be9b89e6b84e",
                    "full_info": [
                    {
                        "trivia": "The record on top of the stack Mrs. Parsons \"sets straight\" is the iconic soundtrack to Valley Girl, the 1982 film directed by this episode's director, Martha Coolidge."
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "F5215",
                    "id": 140673,
                    "title": "The Famous Ventriloquist Did It",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Average Joe",
                "id": "4.151204",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(USA) (second season title)",
                        "kind": "tv series",
                        "md5sum": "e6c1a9e65414a1b33b372d8af53bde11",
                        "aka_title": "Average Joe: Hawaii",
                        "phonetic_code": "A162",
                        "production_year": 2004
                    },
                    {
                        "note": "(USA) (promotional title)",
                        "kind": "tv series",
                        "md5sum": "4ede7ac19b3936d1bed82097561665aa",
                        "aka_title": "Average Joe 2: Hawaii",
                        "phonetic_code": "A162",
                        "production_year": 2004
                    },
                    {
                        "note": "(USA) (third season title)",
                        "kind": "tv series",
                        "md5sum": "f5b01592b605b92397d27fb2a7c467c1",
                        "aka_title": "Average Joe: The Joes Strike Back",
                        "phonetic_code": "A1623",
                        "production_year": 2005
                    }],
                    "kind": "tv series",
                    "md5sum": "8d2bd75e7d1ccf9fdeacc841910763f0",
                    "full_info": [
                    {
                        "quotes": "[in a private moment, Zach tells the producers his true feelings about John]::Zach: I don't feel disdain for him. I just genuinely hate him."
                    },
                    {
                        "quotes": "[final elimination]::Melana: Tonight, the romance has to end."
                    },
                    {
                        "quotes": "Walter Steffen: [said as he is going into the bus after getting voted off] Remember Wally! Remember Wally!"
                    },
                    {
                        "soundtrack": "\"Goodbye, Goodbye\" 'Oingo Boingo' (qv) Written by 'Danny Elfman (I)' (qv)"
                    },
                    {
                        "trivia": "The second installment was taped prior to the airing of the first so that none of the participants would learn about the plot twists."
                    },
                    {
                        "trivia": "'Adam Mesh' (qv) was the runner up of the original Average Joe series."
                    },
                    {
                        "printed media reviews": "Flynn, Gillian. \"Television: Vanity Fare (B+)\". In: \"Entertainment Weekly 132pp\" (USA), Iss. 749, 6 February 2004, (MG)"
                    },
                    {
                        "essays": "Rhodes, Joe. \"10 things you didn't know about.Average Joe\". In: \"TV Guide\" (USA), Vol. 52, Iss. 4, 24 January 2004, Pg. 59-61, (MG)"
                    },
                    {
                        "plot": "A gorgeous lady is cast as a \"bachelorette\" to find her dream man. When her suitors arrive she finds that they are just average looking guys, not handsome hard-bodies as she was hoping. But, as the she gets to know the average fellas a new group of studs in brought in to change the complexity of the game."
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Game-Show"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "genres": "Romance"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Hawaii, USA"
                    },
                    {
                        "locations": "Palm Springs, California, USA"
                    },
                    {
                        "runtimes": "60"
                    },
                    {
                        "runtimes": "USA:60"
                    },
                    {
                        "tech info": "RAT:1.33 : 1"
                    },
                    {
                        "release dates": "USA:3 November 2003"
                    },
                    {
                        "release dates": "USA:5 January 2004"
                    },
                    {
                        "release dates": "USA:15 March 2004"
                    },
                    {
                        "release dates": "USA:28 June 2005"
                    },
                    {
                        "release dates": "Australia:18 March 2004"
                    },
                    {
                        "release dates": "Australia:5 February 2004"
                    },
                    {
                        "release dates": "UK:9 April 2005"
                    },
                    {
                        "release dates": "UK:26 December 2005"
                    },
                    {
                        "release dates": "Sweden:18 March 2004"
                    },
                    {
                        "release dates": "UK:19 August 2004"
                    },
                    {
                        "release dates": "Norway:6 May 2004"
                    },
                    {
                        "release dates": "UK:8 July 2004"
                    },
                    {
                        "release dates": "France:30 January 2005"
                    }],
                    "phonetic_code": "A162",
                    "id": 198486,
                    "series_years": "2003-????",
                    "title": "Average Joe",
                    "production_year": 2003
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Commissioner Bigfish",
                "id": "4.164452",
                "label": "production",
                "props":
                {
                    "episode_nr": 5,
                    "kind": "episode",
                    "md5sum": "625096a581769fbe7628702d469aeaf4",
                    "full_info": [
                    {
                        "runtimes": "20"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "C5256",
                    "id": 140662,
                    "title": "Commissioner Bigfish",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Thumb Affair",
                "id": "4.168842",
                "label": "production",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "160e0f0d6110a304cca4718a68eb94a6",
                    "full_info": [
                    {
                        "goofs": "CONT: The white spray paint on the \"Do Not Touch\" sign is different between the first and second times it is shown."
                    },
                    {
                        "runtimes": "20"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "T516",
                    "id": 140675,
                    "title": "The Thumb Affair",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Ferret Royale",
                "id": "4.169305",
                "label": "production",
                "props":
                {
                    "episode_nr": 6,
                    "kind": "episode",
                    "md5sum": "ce73d4d4ef086148804d85e726568ca6",
                    "full_info": [
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "F6364",
                    "id": 140665,
                    "title": "Ferret Royale",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Almost Royal",
                "id": "4.174236",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "345768036a0e09877050c80e9b867e94",
                    "full_info": [
                    {
                        "printed media reviews": "Medd, James. \"Les nouveaux joyaux de la Couronne. Les Chinois adorent \" Sherlock \", les Américains reffolent de \" Downtown Abbey \", les Iraniens ne manqueraient pas un épisode de \" Top Gear \"... En ce début du XXIe siècle, le Royaume-Uni s'est reconstitué un empire - télévisuel cette fois.\". In: \"Courrier International\" (Paris, France), Courrier International S.A., Iss. # 1238, 24 July 2014, Pg. 43, (MG), ISSN: 1154-516X, (original article published in The New Statesman, London on 26-6-2014)"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "release dates": "USA:21 June 2014"
                    }],
                    "phonetic_code": "A4523",
                    "id": 105005,
                    "series_years": "2014-????",
                    "title": "Almost Royal",
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Tribeca's Day Off",
                "id": "4.176600",
                "label": "production",
                "props":
                {
                    "episode_nr": 7,
                    "kind": "episode",
                    "md5sum": "9d2724dcd3a7cae9202faa2aaeb606f5",
                    "full_info": [
                    {
                        "trivia": "Cecily Strong guests as a character named Samantha Stephens. Although this is the same name as Elizabeth Montgomery's character on \"Bewitched,\" there are strangely no jokes or references to the earlier series."
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "T6123",
                    "id": 140677,
                    "title": "Tribeca's Day Off",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Inside Man",
                "id": "4.190230",
                "label": "production",
                "props":
                {
                    "episode_nr": 9,
                    "kind": "episode",
                    "md5sum": "98ea77cf055318fc58104d115207d8f7",
                    "full_info": [
                    {
                        "locations": "Robin Hood Pub, Sherman Oaks, California, USA"
                    },
                    {
                        "runtimes": "20"
                    },
                    {
                        "release dates": "USA:18 January 2016"
                    }],
                    "phonetic_code": "I5235",
                    "id": 140667,
                    "title": "Inside Man",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Angie Tribeca",
                "id": "4.192039",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(USA) (working title)",
                        "kind": "tv series",
                        "md5sum": "8fb53fce4a4d2dbd52c7399d3b39f471",
                        "aka_title": "Tribeca",
                        "phonetic_code": "T612",
                        "production_year": 2014
                    },
                    {
                        "note": "(Germany) (imdb display title)",
                        "kind": "tv series",
                        "md5sum": "c7f7eebf77c758538e56a377cb7e5c07",
                        "aka_title": "Angie Tribeca - Sonst nichts!",
                        "phonetic_code": "A5236",
                        "production_year": 2016
                    }],
                    "kind": "tv series",
                    "md5sum": "75dc7889bc011a088ecbf401eae1d5a1",
                    "full_info": [
                    {
                        "trivia": "In November 2015, it was announced that, in an unprecedented move, TBS will air the first season of the series in a 25-hour marathon, beginning on January 17, 2016. It will consist of the first ten episodes of the series, repeated five times over two days."
                    },
                    {
                        "trivia": "Angie's parents are played by 'Rashida Jones' (qv)' real life parents, 'Quincy Jones (I)' (qv) and 'Peggy Lipton' (qv)."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Crime"
                    },
                    {
                        "genres": "Mystery"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "taglines": "Finally! A show about cops!"
                    }],
                    "phonetic_code": "A5236",
                    "id": 140648,
                    "series_years": "2016-????",
                    "title": "Angie Tribeca",
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Wedding Planner Did It",
                "id": "4.197734",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "b1648625298a57f3759cb02f870042ad",
                    "full_info": [
                    {
                        "trivia": "Adam Scott has a cameo in the beginning of this episode. Both Rashida Jones and Adam Scott had consistent roles in the TV show Parks and Recreation."
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "release dates": "USA:17 January 2016"
                    }],
                    "phonetic_code": "W3521",
                    "id": 140676,
                    "title": "The Wedding Planner Did It",
                    "season_nr": 1,
                    "production_year": 2016
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Banana",
                "id": "4.200703",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "7c4d595b957b6558ab9d3abe39dfa0f2",
                    "full_info": [
                    {
                        "certificates": "Germany:16"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Drama"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "25"
                    },
                    {
                        "sound mix": "Mono"
                    },
                    {
                        "tech info": "RAT:2.35 : 1"
                    }],
                    "phonetic_code": "B5",
                    "id": 215872,
                    "series_years": "2015-2015",
                    "title": "Banana",
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother's Efourum",
                "id": "4.201421",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (new title)",
                        "kind": "tv series",
                        "md5sum": "e898c149a120b5c668c23c6953eafc37",
                        "aka_title": "Big Brother's Big Mouth",
                        "phonetic_code": "B2163",
                        "production_year": 2005
                    }],
                    "kind": "tv series",
                    "md5sum": "199d3772cb84d4163439f5ae4ebd620d",
                    "full_info": [
                    {
                        "trivia": "For its third series in May 2005, after covering Celebrity Big Brother in the January of that year, \"Big Brother's Efourum\" became \"Big Brother's Big Mouth\". The format remained almost identical with the only major change being a set update, namely the removal of the desk which guest panelists sat behind in favor of raised seating platforms. New features included \"Textual Preference\" where the public were polled on various trivial topics associated with the housemates and \"Big Brother's Mouthpiece\" which was a 24 hour telephone answering service people used to vent their spleen on the daily dramas in the house."
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Talk-Show"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Elstree Studios, Borehamwood, Hertfordshire, England, UK"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "OFM:Video"
                    },
                    {
                        "tech info": "PFM:Video"
                    },
                    {
                        "tech info": "RAT:1.33 : 1"
                    },
                    {
                        "release dates": "UK:31 May 2004"
                    }],
                    "phonetic_code": "B2163",
                    "id": 262606,
                    "series_years": "2004-????",
                    "title": "Big Brother's Efourum",
                    "production_year": 2004
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Banzai",
                "id": "4.202679",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "32de160d89d527ca78e707043fb661ba",
                    "full_info": [
                    {
                        "certificates": "UK:15"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Game-Show"
                    },
                    {
                        "languages": "English"
                    }],
                    "phonetic_code": "B52",
                    "id": 219771,
                    "series_years": "2001-2003",
                    "title": "Banzai",
                    "production_year": 2001
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.7)",
                "id": "4.202790",
                "label": "production",
                "props":
                {
                    "episode_nr": 7,
                    "kind": "episode",
                    "md5sum": "4065c707933cc70cc2001ed42e3a77b6",
                    "full_info": [
                    {
                        "plot": "Handsome hunk Aiden and the less good-looking Frank are thrown together when they are part of a threesome with a man they met in a club. Next morning they spend time together and get on very well, Frank suggesting that they could be a couple. Despite Frank's view that looks are not everything Aiden is not convinced as he regards himself as out of Frank's league and they can never be anything more than friends."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:5 March 2015"
                    },
                    {
                        "release dates": "Netherlands:30 July 2015"
                    }],
                    "id": 215879,
                    "title": "(#1.7)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Strip or Treat",
                "id": "4.205121",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "6e4d9f0b0667f3d2614b0872eb3d38bd",
                    "full_info": [
                    {
                        "runtimes": "22"
                    },
                    {
                        "release dates": "USA:22 October 2014"
                    },
                    {
                        "release dates": "UK:7 September 2015"
                    }],
                    "phonetic_code": "S3616",
                    "id": 205673,
                    "title": "Strip or Treat",
                    "season_nr": 4,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Everything She Wants",
                "id": "4.205768",
                "label": "production",
                "props":
                {
                    "episode_nr": 9,
                    "kind": "episode",
                    "md5sum": "0b9b0fa54e9f31edcb1c4859b008908c",
                    "full_info": [
                    {
                        "quotes": "[Erica, feeling a little stressed by the situation she is in, unexpectedly walks into Dr. Tom's office and sees him sitting there]::Erica Strange: [in a relieved manner] Oh, thank God.::Dr. Tom: I'm not sure if I should be flattered or perturbed."
                    },
                    {
                        "quotes": "Erica Strange: I can't be into Cassidy. I'm not a lesbian.::Dr. Tom: \"Labels are for cans, not people.\" Anthony Rapp."
                    },
                    {
                        "quotes": "Erica Strange: They say love is friendship set on fire. And if you're lucky enough to find someone you can give yourself to, mind, body and soul, you should hold on, and hope like hell you don't get burned."
                    },
                    {
                        "quotes": "Erica Strange: I think you look great!::Cassidy Holland: I think they would swarm you in a dyke bar!"
                    },
                    {
                        "soundtrack": "\"Standing Outside a Broken Phone Booth\" (uncredited) Written by 'Jane Feather' (qv), 'Leonard Feather' (qv), Christopher J. O'Connor Performed by 'Primitive Radio Gods' (qv)"
                    },
                    {
                        "soundtrack": "\"Spice Up Your Life\" (uncredited) Written by 'Richard Stannard' (qv), 'Matt Rowe (I)' (qv), 'Spice Girls' (qv) Performed by 'Spice Girls' (qv)"
                    },
                    {
                        "soundtrack": "\"The Rockafeller Skank\" (uncredited) Written by 'Camille Yarbrough' (qv), 'Fatboy Slim' (qv) Performed by 'Fatboy Slim' (qv)"
                    },
                    {
                        "soundtrack": "\"Madman\" (uncredited) Written by Clara Klein"
                    },
                    {
                        "copyright holder": "Session I Productions Limited"
                    },
                    {
                        "plot": "Erica is emotionally confused. On their three month anniversary, Ryan tells her that he loves her, a place where she is not yet at. And she still seems to have unresolved feelings for Ethan, despite he who is trying to reconcile with his wife, Claire. Ryan can sense something still lingering between Ethan and Erica. To resolve her current conundrum, Dr. Tom sends Erica back to a previous relationship with Cassidy Holland, one that ended just before Y2K. Erica emphatically states that Cassidy is the most amazing woman she has ever met, and a person on whom she had a crush. Although Cassidy was openly gay, Erica states her feelings were not in a romantic way despite she knowing that Cassidy wanted something more between them. This time around, Erica wants to ensure that Cassidy knows that she is straight so that they can deal with the issue head on and thus maintain their friendship. But this revisit to her past makes her truly confront her feelings for Cassidy, and how that may impact not only her friendship with Cassidy but also her current situation with both Ryan and Ethan."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:4 March 2009"
                    },
                    {
                        "release dates": "Netherlands:2 June 2009"
                    },
                    {
                        "release dates": "Australia:23 October 2009"
                    },
                    {
                        "release dates": "Hungary:15 November 2009"
                    },
                    {
                        "release dates": "Japan:11 September 2010"
                    },
                    {
                        "release dates": "Germany:3 March 2011"
                    }],
                    "phonetic_code": "E1635",
                    "id": 241676,
                    "title": "Everything She Wants",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Beehive",
                "id": "4.206686",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "f4a2e3952d29759240b32b48bc975f5b",
                    "full_info": [
                    {
                        "production process protocol": "Jones, Alice. \"Voices of the Beehive\". In: \"The Independent: Independent Life\" (UK), Independent News & Media Limited, Vol. 6906, 2 December 2008, Pg. 16 - 17, (NP)"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:3 December 2008"
                    }],
                    "phonetic_code": "B1",
                    "id": 239137,
                    "series_years": "2008-????",
                    "title": "Beehive",
                    "production_year": 2008
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother's Big Brain",
                "id": "4.206937",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "201bab56fafa647a341fc46e7f94aa77",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "UK:22 May 2006"
                    }],
                    "phonetic_code": "B2163",
                    "id": 262146,
                    "series_years": "2006-????",
                    "title": "Big Brother's Big Brain",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Sacred Cow",
                "id": "4.211972",
                "label": "production",
                "props":
                {
                    "episode_nr": 3,
                    "kind": "episode",
                    "md5sum": "75579bf919cdf71e6b997166bea5ae69",
                    "full_info": [
                    {
                        "goofs": "MISC: Bob gives Teddy his bill for his burger and fries, and it's $4.16. On the menu board in the restaurant burgers are $5 (for the non daily special), and fries are extra."
                    },
                    {
                        "goofs": "CONT: While Bob and the kids are in the freezer, near the beginning, the freezer door behind the kids starts out closed but then appears open, though no one had opened it."
                    },
                    {
                        "trivia": "Burger of the Day: Mission A-Corn-Plished Burger (Comes With Corn Salsa)"
                    },
                    {
                        "trivia": "SPOILER: Moolissa gets stuck upstairs. This is a plot point on 'Last Man on Earth,' another Kristin Schaal show"
                    },
                    {
                        "trivia": "The store across the street from Bob's (next to Jimmy Pesto's) is called Yours Truly Stationary."
                    },
                    {
                        "plot": "Bob's Burgers is about to hit 100,000 burger sales and Bob is excited until he meets his meat... documentary filmmaker, Randy Watkins, and Moolissa, a steer wearing a blonde wig. (Randy does not care about gender correctness.) There is an official five (5) day Cow-ntdown: will Bob let Moolissa be slaughtered or will he admit to being a hypocrite and a murderer? Bob calls Animal Control and his own kids turn against him. Bring on the bad publicity: \"Dial \"M\" for Moo-der\" really packs the restaurant. Bob is increasingly aware of Moolissa. Also, there are communications between Moolissa and Tina...or are they? Will Moolissa be free to run with the castrated steers or will poor Moolissa Rest in Peas?"
                    },
                    {
                        "plot": "A radical documentary filmmaker strolls into town with the burning desire to get Bob to admit he is a murderer of innocent animals for commercial gains. Bob's biggest and most immediate adversary is now a blonde wigged cow named \"Moolissa.\""
                    },
                    {
                        "plot": "When a controversial documentary filmmaker places a live cow outside of the family restaurant to make a statement, Bob is livid when it starts to scare away customers. However, to everyone's surprise, Bob treats the cow like a member of the family."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "New Zealand:PG"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:23 January 2011"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "Australia:9 February 2011"
                    },
                    {
                        "release dates": "Hungary:17 October 2011"
                    },
                    {
                        "release dates": "Netherlands:2 April 2014"
                    }],
                    "phonetic_code": "S2632",
                    "id": 289760,
                    "title": "Sacred Cow",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bo' Selecta!",
                "id": "4.213744",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (third season title)",
                        "kind": "tv series",
                        "md5sum": "bf591092e5fb92446fffd41704950917",
                        "aka_title": "Bo' Selecta! Vol. 3",
                        "phonetic_code": "B2423",
                        "production_year": 2004
                    }],
                    "kind": "tv series",
                    "md5sum": "0a41c86c6784eb52e1eca8f7e8c56f50",
                    "full_info": [
                    {
                        "alternate versions": "The DVD includes several deleted scenes, including: - A spoof of Tourette's Syndrome documentary \"The Boy Can't Help It\" featuring \"Gareth Gates\". - Additional \"David Blaine\" tricks. - A \"Michael Jackass\" sketch featuring Jade Goody."
                    },
                    {
                        "alternate versions": "Sound-a-likes of particular songs were used for VHS and DVD releases as the rights to use the actual music for home viewing were not obtained. Original broadcasts feature the real songs."
                    },
                    {
                        "goofs": "CREW: In the Michael Jackass episode where Michael Jackson is \"Moonwalking\", the camera crew is reflected in some shop windows as the pass."
                    },
                    {
                        "quotes": "Marilyn Manson: This is the living room, where I like to relax and sometimes stick my penis between my legs and pretend I'm a lady."
                    },
                    {
                        "quotes": "Avid Merrion: Hello to you. My name is Avid Merrion. I am number one celabrity superfan here in the world. This is my programme, I hope you like it, it is warm."
                    },
                    {
                        "quotes": "Michael Jackson: Kiss my bad self motherfucker cha'mone!"
                    },
                    {
                        "quotes": "Reporter: So, David what's the latest on your transfer?::David Beckham: It's not a transfer! It's a real tattoo and it says, \"My Name is David\"! Huh-huh!"
                    },
                    {
                        "quotes": "Craig David: Ya wot, Kes? Don't call her that, Kes! She's not a slag, she's me mum!"
                    },
                    {
                        "quotes": "Kelly Osbourne: [on Christina Aguilera] She's one of the most disgusting people in the world! Sure, she had an amazing voice, but that doesn't change the fact she's a total [bleep]! I mean she looks like a [bleeping] drag queen! Right dad?::Ozzy Osbourne: You're all [bleeping] mad!::Kelly Osbourne: Not me, I'm just slightly overweight.::Ozzy Osbourne: [mutters] Fat bitch."
                    },
                    {
                        "quotes": "David Blaine: Later on I'll be milking beer from a cow, keep watching!"
                    },
                    {
                        "quotes": "David Blaine: As a kid I would spend many hours in my bedroom jerking off to pictures of beautiful women. Now I can make actual beautiful women appear in my bedroom by using the magic. Shazam!"
                    },
                    {
                        "quotes": "Craig David: Channel 55 and a box of tissues, that's what I use for my sexual issues."
                    },
                    {
                        "quotes": "Gandalf the White: Thou shall not pass! Unless you can do a handstand for your grandfather!"
                    },
                    {
                        "quotes": "Mary Jane: Do you love me?::Peter Parker: Um...::Mary Jane: Do you love me [starts to unbutton shirt]::Peter Parker: Er...::Mary Jane: [shows chest] Do you love *these*?::Peter Parker: Ooh!"
                    },
                    {
                        "quotes": "Ant Man: I canny help it man, the blood rush round me head keep me pantin' all the time... weyhey man, I'm Ant Man.::Dec Pet: An I'm Dec Pet, and this is the part of the show where we don't know what's gonay happen.::Ant Man: So as always, lets take out our earpieces.::Dec Pet: And lets turn off the autocue, howay gi' us the card. This week, Ant Man will be doin, or no pet someone doesn' like you!::Ant Man: Why's it always me man!::Dec Pet: Howay, don't be such a bairn, Join us afta the break to find oot what he'll be doin!... Weyhey that was a long one, alreet pet, this week, Ant Man will be getting' bummed by a special mystery guest, I go gan see if their ready::Dec Pet: Alreet pet, this weeks guest, all the way from Byker Groove, it's me Declan Donnelly! I canny believe it man, I've been wanin' to do this since SMTV, he gives me a reet Wonkey Donkey, and no, I won't be usin' an implement, I'll be usin' me manhood, I haveney bummed him before but like me father said when I were a bairn, there's a first time for everything, so lets get crackin' with the knackin'!::Dec Pet: Ooh, howay son. I donay need no butta, this is goin' straight in. This is better than Cat Deeley man, smile ya bastad, smile!"
                    },
                    {
                        "trivia": "In Series 3, Steve Webster, head of visual effects, had to design five bears. An new bear for Leigh to wear, a stuffed one and three robotic ones, one which the head moved, one which the arms moved and one which both arms and legs moved."
                    },
                    {
                        "trivia": "To achieve shots where the viewer can't see the body of Leigh as the bear when there's no padding behind him, Leigh's head was through a blue screen and was then keyed in in post production."
                    },
                    {
                        "trivia": "Both the Michael Jackson sketches and the Mel B sketches of Series 3 were filmed in four days, two for each character, although not on consecutive days."
                    },
                    {
                        "trivia": "Mel B's stomach is actually two towels."
                    },
                    {
                        "trivia": "For the shot like Ant and Dec and the Davina McCall interviews in Series 2 and the \"Crappy Days\" spoof in Series 3, the camera was set up in one place. Leigh said his lines in one place, swapped costumes and did his other line in another place and so on. The images were then fused together to give the impression that Leigh is in many places at once."
                    },
                    {
                        "trivia": "In the Christmas special, \"Ho Ho Ho Selecta\", when the Lorraine Kelly set came out of storage, the pillow which she sits on disappeared, and the production team had to cut up a pillow from a different sofa and stick Leigh in it, literally the moment Brian Dowling was coming to the set."
                    },
                    {
                        "certificates": "UK:15"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Crystal Palace Swimming Club, Crystal Palace, London, England, UK"
                    },
                    {
                        "locations": "Cuddeback Dry Lake, California, USA"
                    },
                    {
                        "locations": "Guildford, Surrey, England, UK"
                    },
                    {
                        "locations": "Hever Castle, Hever, Kent, England, UK"
                    },
                    {
                        "locations": "Leeds, West Yorkshire, England, UK"
                    },
                    {
                        "locations": "London, England, UK"
                    },
                    {
                        "locations": "Los Angeles, California, USA"
                    },
                    {
                        "locations": "Mallorca, Balearic Islands, Spain"
                    },
                    {
                        "locations": "New York City, New York, USA"
                    },
                    {
                        "locations": "Oxford Prison, New Road, Oxford, Oxfordshire, England, UK"
                    },
                    {
                        "runtimes": "UK:30"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "UK:6 September 2002"
                    },
                    {
                        "taglines": "Thank you, please!"
                    }],
                    "phonetic_code": "B2423",
                    "id": 288207,
                    "series_years": "2002-2004",
                    "title": "Bo' Selecta!",
                    "production_year": 2002
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Secret of Now",
                "id": "4.213764",
                "label": "production",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "e3c3bf33969bfeec31129d4917902a9e",
                    "full_info": [
                    {
                        "quotes": "Judith: [questioning Erica about her first kiss with Ethan] The kiss - scale of one to ten.::Erica Strange: [without hesitation] Ten... thousand."
                    },
                    {
                        "soundtrack": "\"Enchantment\" Written by 'Lily Frost' (qv) (as Lindsey Davis) and 'José Miguel Contreras' (qv) (as José Contreras) Performed by 'Lily Frost' (qv) Courtesy of Aporia Records Inc. Published by Aporetic Music Publishing (SOCAN)"
                    },
                    {
                        "soundtrack": "\"Hit Me Baby One More Time\" Written by 'Max Martin (I)' (qv) (as Martin Karl Sandberg) Performed by Danielle Lindy & 'Trevor Yuile' (qv) Courtesy of Universal Music Publishing"
                    },
                    {
                        "soundtrack": "\"Is It Just Spring!\" Written by 'Lily Frost' (qv) (as Lindsey Davis) Performed by 'Lily Frost' (qv) Courtesy of Aporia Records Inc. Published by Aporetic Music Publishing (SOCAN)"
                    },
                    {
                        "soundtrack": "\"Love Can Hurt\" Tim Renwick's Country Pie Cavendish Music Courtesy The Music People Ltd."
                    },
                    {
                        "soundtrack": "\"No Rain\" Written by 'Glen Graham (I)' (qv), 'Shannon Hoon' (qv), 'Brad Smith (XII)' (qv), 'Rogers Stevens' (qv) (as Thomas Rogers Stevens), 'Christopher Thorn' (qv) (as Christopher John Thorn) Performed by 'Blind Melon' (qv) Courtesy of EMI April Music Inc. (ASCAP) (publishing) Courtesy of EMI Music Canada (master)"
                    },
                    {
                        "soundtrack": "\"Tubthumping\" Written by 'Nigel Hunter (I)' (qv), Duncan Bruce, 'Alice Nutter' (qv), 'Louise Watts (II)' (qv), 'Paul Greco (I)' (qv), 'Darren Hammer' (qv) (as Darren Hamer), 'Allen Whalley' (qv), 'Judith Abbot' (qv) (as Judith Abbott) Performed by 'Chumbawamba' (qv) Courtesy of EMI Blackwood Music Inc. (BMI) (publishing) Courtesy of EMI Music Canada (master) Courtesy of Universal Music Inc. (master)"
                    },
                    {
                        "soundtrack": "\"Every Little Thing\" Written and Performed by 'Melanie Doane' (qv) Master Recording and Publishing owned by Prairie Ocean Inc."
                    },
                    {
                        "trivia": "Reagan Pasternak (Julianne Giacomelli) has worked with Morgan Kelly's (Brent Kennedy) 'Killjoys' co-star, Aaron Ashmore's twin brother Shawn, in the TV show 'In A Heartbeat'. They played Val Lanier and Tyler Connell respectively."
                    },
                    {
                        "copyright holder": "Session Productions Limited"
                    },
                    {
                        "plot": "Erica feels likes it's going to be a good day. She is basking in the aftermath of her first kiss with Ethan, with who she sees a potentially happy future despite their long friendship and him still being married to Claire. And she's starting her new job - albeit in an extremely junior position - as an editorial assistant at River Rock Publishing. Her day quickly goes downhill when she meets her new boss, Julianne Giacomelli, a young, controlling, confrontational, passive-aggressive bully of a person, who seems to relish in embarrassing Erica. To Erica, Julianne is a younger, female version of her first year university creative writing professor, Antonin Lozar. Because of the emotional scars from that class, Erica has never done any creative writing since. Dr. Tom sends her back to Professor Lozar's class to defend what she considers a true indication of who she is as a person, her poem entitled \"Snowflakes\". Will her new experience with Professor Lozar prepare her to handle Julianne?"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:26 January 2009"
                    },
                    {
                        "release dates": "Netherlands:28 April 2009"
                    },
                    {
                        "release dates": "Australia:18 September 2009"
                    },
                    {
                        "release dates": "Hungary:18 October 2009"
                    },
                    {
                        "release dates": "Japan:7 August 2010"
                    },
                    {
                        "release dates": "Germany:27 January 2011"
                    }],
                    "phonetic_code": "S2631",
                    "id": 241702,
                    "title": "The Secret of Now",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bad Robots",
                "id": "4.220918",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "b69e6ae0a211c5925cea8a58dfd97997",
                    "full_info": [
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "release dates": "UK:11 November 2014"
                    }],
                    "phonetic_code": "B3613",
                    "id": 209429,
                    "series_years": "2014-????",
                    "title": "Bad Robots",
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bamboozle",
                "id": "4.224626",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (promotional title)",
                        "kind": "tv series",
                        "md5sum": "94b52814a21242576fe65722cd63763e",
                        "aka_title": "Bamboozle: The Secret TV Game Show",
                        "phonetic_code": "B5124",
                        "production_year": 2005
                    }],
                    "kind": "tv series",
                    "md5sum": "27fae957093fbcc7f875f80c2bdd98f0",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "31"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:24 November 2005"
                    }],
                    "phonetic_code": "B5124",
                    "id": 215468,
                    "series_years": "2005-????",
                    "title": "Bamboozle",
                    "production_year": 2005
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother",
                "id": "4.225652",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (sixth season title)",
                        "kind": "tv series",
                        "md5sum": "2ee5501a432184b3f017170f6eca24d7",
                        "aka_title": "Big Brother 6",
                        "phonetic_code": "B2163",
                        "production_year": 2005
                    },
                    {
                        "note": "(UK) (third season title)",
                        "kind": "tv series",
                        "md5sum": "70032bdf35f9e5f75877a186b805c734",
                        "aka_title": "Big Brother 3",
                        "phonetic_code": "B2163",
                        "production_year": 2002
                    },
                    {
                        "note": "(UK) (longer version)",
                        "kind": "tv series",
                        "md5sum": "8078e433dcdd63555829db93e46ceeed",
                        "aka_title": "Big Brother Live",
                        "phonetic_code": "B2163",
                        "production_year": 2000
                    },
                    {
                        "note": "(UK) (fifth season title)",
                        "kind": "tv series",
                        "md5sum": "42fb74152b62811f409f229939f84992",
                        "aka_title": "Big Brother 5",
                        "phonetic_code": "B2163",
                        "production_year": 2004
                    },
                    {
                        "note": "(UK) (fourth season title)",
                        "kind": "tv series",
                        "md5sum": "84880b44f3bc88b512b1c484ad4d5d33",
                        "aka_title": "Big Brother 4",
                        "phonetic_code": "B2163",
                        "production_year": 2003
                    },
                    {
                        "note": "(UK) (second season title)",
                        "kind": "tv series",
                        "md5sum": "cf7a1ddace6c548ba650ccf5565fe403",
                        "aka_title": "Big Brother 2",
                        "phonetic_code": "B2163",
                        "production_year": 2001
                    },
                    {
                        "note": "(International: English title)",
                        "kind": "tv series",
                        "md5sum": "74fa92cd8b5fa7fde15f0947bed337f4",
                        "aka_title": "Big Brother: UK",
                        "phonetic_code": "B2163",
                        "production_year": 2000
                    },
                    {
                        "note": "(UK) (seventh season title)",
                        "kind": "tv series",
                        "md5sum": "3805a1992a7f8dba8d26e491f3f47750",
                        "aka_title": "Big Brother 7",
                        "phonetic_code": "B2163",
                        "production_year": 2006
                    }],
                    "kind": "tv series",
                    "md5sum": "29a536d4b002b19c5c8fb9d91a3145a0",
                    "imdb_index": "III",
                    "full_info": [
                    {
                        "quotes": "[repeated line]::Presenter: Big Brother house, this is Davina. You are live on Channel 4, please do not swear."
                    },
                    {
                        "quotes": "Susie Verrico: You're certainly no lady Grace.::Grace Adams-Short: Nor are you, you moose."
                    },
                    {
                        "quotes": "Big Brother: [Last lines of Big Brother 7] Pete, are you glad you've been in the Big Brother house?::Pete Bennett: It's saved my life, thank you."
                    },
                    {
                        "quotes": "Nikki Grahame: [after Susie's arrival] Who is she? Who is she? Who is she? Where did you find her?"
                    },
                    {
                        "quotes": "Nikki Grahame: Whatever tickles your pickle..."
                    },
                    {
                        "soundtrack": "Theme Music Written by 'Paul Oakenfold' (qv) and 'Andy Gray (III)' (qv) Performed by Element Four"
                    },
                    {
                        "trivia": "The show was invented by 'John de Mol (II)' (qv) of the Netherlands and developed by his production company, Endemol. It has been a prime time hit in 19 different countries."
                    },
                    {
                        "trivia": "The original house took 75 workmen 131 days to build using 20km of cable, 57 mirrors, 33 cameras and 50 microphones."
                    },
                    {
                        "trivia": "The housemates are given a lawnmower to keep the grass tidy. Only 'Shell Jubin' (qv) has used it naked."
                    },
                    {
                        "trivia": "There are seven different breeds of chicken in the Big Brother house, each was chosen for suitable looks and compatibility."
                    },
                    {
                        "trivia": "Big Brother 7 introduced a double eviction, and then did it a second time in the same series."
                    },
                    {
                        "trivia": "The song used for Big Brother 7's highlights was \"Chasing cars\" by Snow Patrol."
                    },
                    {
                        "trivia": "In Big Brother 7, for the first time the public was able to vote a house-mate back into the Big Brother house, and they were also eligible to win the prize money as well."
                    },
                    {
                        "trivia": "Series 1-6 of Big Brother (2000-2005), including the four series of Celebrity Big Brother in between, were some of the very few programs on mainstream British terrestrial television that were broadcast in the old 4:3 aspect ratio as opposed to the more common 16:9 wide-screen format. (Except the Big Brother Panto, which was in wide-screen). The reason for this is unclear, but was believed to be because of the size of some of the hidden cameras. However, from Big Brother 7 (2006) the aspect ratio has been switched in favor of the 16:9 format, with Big Brother, and all of its sister shows, broadcasting in wide-screen."
                    },
                    {
                        "trivia": "The action from within the house is streamed live over the Internet for a one-off fee subscription that lasts until the end of a series. Since the second series Channel 4's sister station E4 has also carried live pictures and audio from the Big Brother house. However the stream had a delay of 15 minutes so that audio and/or pictures can be edited out to comply with TV regulations."
                    },
                    {
                        "trivia": "The Big Brother 7 eye was released to the public on May 2, 16 days before the official launch."
                    },
                    {
                        "trivia": "Following the end of Big Brother 7, 156 house-mates have inhabited the house (not including the 8 participants in Teen Big Brother). 33 of those were celebrities, including 'Chantelle Houghton' (qv), the non-celebrity contestant in _\"Celebrity Big Brother\" (2001)_ (qv) series 4."
                    },
                    {
                        "trivia": "The now iconic \"Eye\" logo was designed by Daniel Eatock of design agency Foundation33. On the billboard advertisements for series 7 there was no name or date, just the black and gold eye."
                    },
                    {
                        "trivia": "A 2D artistic installation between the carriageways in the Bus portion of Gateshead Interchange is reminiscent of the Big Brother eye."
                    },
                    {
                        "trivia": "Each year Big Brother is a ratings winner for Channel 4. The final of Big Brother 3 on 27 July 2002 was watched by 10 million viewers, the highest ever ratings for a non-film on the channel, and BB3 as a whole averaged almost 6 million viewers. Big Brother 6 had an average of 4.4 million, the poorest in the show's history. BB7 was ahead of it, averaging 4.7 million viewers. However the finale of Big Brother 7 at its peak reached 8.2 million viewers."
                    },
                    {
                        "trivia": "'Nikki Grahame' (qv) received her own television show, _\"Princess Nikki\" (2006)_ (qv), after taking part in Series Seven."
                    },
                    {
                        "trivia": "SPOILER: Series winners: 'Craig Phillips (I)' (qv) (series 1), 'Brian Dowling (I)' (qv) (series 2), 'Kate Lawler' (qv) (series 3), 'Cameron Stout' (qv) (series 4), 'Nadia Almada' (qv) (series 5), 'Anthony Hutton (I)' (qv) (series 6), 'Pete Bennett (I)' (qv) (series 7), 'Brian Belo' (qv) (series 8), 'Rachel Rice (I)' (qv) (series 9), 'Sophie Reade' (qv) (series 10), 'Josie Gibson' (qv) (series 11), 'Aaron Allard-Morgan' (qv) (series 12), 'Luke Anderson (X)' (qv) (series 13), 'Sam Evans (XIV)' (qv) (series 14), 'Helen Wood (V)' (qv) (series 15), Chloe Wilburn (series 16), Jason Burrill (series 17)"
                    },
                    {
                        "trivia": "The temperature in the pool is kept at a constant 28 degrees Celsius."
                    },
                    {
                        "trivia": "The only eight housemates in the history of Big Brother to be thrown out for rule-breaking are 'Nicholas Bateman' (qv) in series 1, 'Kitten Pinder' (qv) and Emma Greenwood in series 5, 'Dawn Blake' (qv) in series 7, 'Emily Parr (I)' (qv) in series 8, Alexandra De-Gale and Dennis McHugh in series 9, and Daley Ojuederie in series 14."
                    },
                    {
                        "trivia": "In BB7, 'Dawn Blake' (qv) became the first contestant to be ejected for having contact with the outside world. Dawn organized a special code with her family: if there was any bad press regarding her, then their family would tell Big Brother that her sister was ill. Dawn received this message and informed the other housemates of this code."
                    },
                    {
                        "trivia": "Series 7 was the first series to allow a random member of the public to enter the house. 100 golden tickets were placed in Kit-Kat chocolate bars, granting the finder a chance to enter the Big Brother house. Of those tickets, 58 were found before the deadline, but two people decided not to put themselves forward for the show, three dropped out, and 19 did not pass the required background checks, leaving a total of 34. The competition began at 10:30pm on May 18, 2006, the launch date of Big Brother. 'Susie Verrico' (qv) became the \"Golden Housemate\" after being randomly selected in a Bingo style machine, as each ticket-holder were randomly given numbers to wear as hats and armbands on the day."
                    },
                    {
                        "trivia": "The theme tune used for all the series was recorded especially for the program by 'Paul Oakenfold' (qv) and 'Andy Gray (III)' (qv) as \"Element 4\". It reached #4 in the UK Singles Chart."
                    },
                    {
                        "trivia": "In total, 21 housemates have voluntarily left the house. 2 housemates have left the house due to medical reasons; in series 11, Keeley Johnson left the house after she broke her ankle during the 'Save and Replace' task, and in series 15, Kimberly Kisselovich left the house due to a mystery illness, which was later revealed to be an ectopic pregnancy. In series 13, Conor McIntyre left the house with £50,000 (half the prize money) as part of the 'White Room' twist."
                    },
                    {
                        "trivia": "Issac Stout of series 10 is the housemate who has had the shortest ever stay in the house, at just under 48 hours."
                    },
                    {
                        "trivia": "SPOILER: Every single housemate to become the first to be evicted in each series has been female: Sada Wilkington in series 1, Penny Ellis in series 2, Lynne Moncrieff in series 3, Anouska Golebiewski in series 4, Vanessa Nimmo in series 5, Mary O'Leary in series 6, Bonnie Holt in series 7, Shabnam Paryani in series 8, Stephanie McMichael in series 9, Beinazir Lasharie in series 10, Rachael White in series 11, Tashie Jackson in series 12, Victoria Eisermann in series 13, Sallie Axl in series 14, Tamara Stewart-Wood in series 15 and Adjoa in series 16. However, this trend was broken by Big Brother 17, which saw Marco Pierre-White Jr. to be the first male housemate to be the first evicted."
                    },
                    {
                        "trivia": "Stuart Wilson of series 5 and Amanda and Sam Merchant of series 8 are the only housemates to enter the house on launch night and make the final week without receiving a single nomination."
                    },
                    {
                        "trivia": "With a total of 46 nominations, Marcus Akin of series 10 is the most nominated housemate in Big Brother history."
                    },
                    {
                        "trivia": "One of the stages of the application process was a psychiatric evaluation."
                    },
                    {
                        "trivia": "Contestant \"Nasty Nick\" tried to influence the nominations with handwritten notes in the first series. This was widely condemned and followed enthusiastically in the media, and Social Commentators have said this event probably influenced the more sensationalist direction of the show. In his own defense, Nick said \"It's only a Gameshow.\""
                    },
                    {
                        "trivia": "A tie-in documentary showed auditions, with tips for viewers on how to get through, such as \"Don't beg\", \"Don't criticize the show\" and \"Have an interesting reason for wanting to be in it\"."
                    },
                    {
                        "trivia": "Nicholas Bateman who later became known as Nasty Nick participated in the first ever series in 2000, he entered the house on Day 1. In 2010 to mark the end of Big Brother's run on Channel 4, Nicholas participated in a mini-series titled \"Ultimate Big Brother\" along with some of the most memorable Big Brother contestants from throughout the years. Nobody else from series 1 participated in this series, and Nicholas made the final. This made him the only ever Big Brother Contestant to be present on the first and last day in the Big Brother house in the show's history"
                    },
                    {
                        "production process protocol": "Gilbert, Gerard. \"Brother of all dramas\". In: \"The Independent Arts & Books\" (UK), Independent News & Media Limited, Vol. 7059, 29 May 2009, Pg. 34 - 35, (MG)"
                    },
                    {
                        "plot": "Big Brother is the UK's biggest reality TV show and is one of the most popular talked-about shows in British TV history. Big Brother takes place entirely within the confines of the Big Brother House. It's essentially a competition between the house mates, the object of which is to be the last remaining house mate in the House. At least one house mate will leave the House every week by a process of nomination and public eviction. Housemates will nominate each other for eviction and those with the most votes from their peers face a public vote. The house mate that receives most public votes leaves the House and is out of the competition. Housemates are provided with a shopping budget each week to buy food and other necessities. Throughout the series house mates will be asked to complete tasks set by Big Brother. If the group does well in the tasks they get rewarded with a bigger shopping budget, plus special treats. On the final night of Big Brother the public vote on which house mate they want to win the show. The house mate with most votes wins a fabulous cash prize!"
                    },
                    {
                        "plot": "Big Brother is a reality TV show broadcast on Channel 4, and S4C in Wales, in which a number of contestants live in an isolated house trying to avoid being evicted by the public with the aim of winning a large cash prize at the end of the run. It is based on the Big Brother series produced by Endemol. The show's name comes from George Orwell's 1949 novel Nineteen Eighty-Four, a dystopia in which Big Brother is the all-seeing leader. The main shows are hosted by Davina McCall and narrated by Marcus Bentley."
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Game-Show"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Bow, London, England, UK"
                    },
                    {
                        "locations": "Elstree Studios, Borehamwood, Hertfordshire, England, UK"
                    },
                    {
                        "runtimes": "60"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "OFM:Video"
                    },
                    {
                        "tech info": "PFM:Video"
                    },
                    {
                        "tech info": "RAT:1.33 : 1"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "UK:14 July 2000"
                    },
                    {
                        "taglines": "Who's watching you?"
                    },
                    {
                        "taglines": "Who goes? You decide!"
                    }],
                    "phonetic_code": "B2163",
                    "id": 260712,
                    "series_years": "2000-????",
                    "title": "Big Brother",
                    "production_year": 2000
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.1)",
                "id": "4.229898",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "9382015e02680abde3f95ec9080d4d13",
                    "full_info": [
                    {
                        "plot": "19-year old gay Dean works as a post boy in an insurance firm and entertains colleagues with a chastity belt he claims a boyfriend in Bristol made him wear though he is relieved when a friend removes it. He asks middle-aged salesman Henry Best for advice regarding the flat he shares with his friend Freddie - the object of Henry's attention - since the boys are struggling to pay the rent to their gangster landlord and Dean does not have it in him to ask for money for sex. Fortunately for all concerned Henry has the solution."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:22 January 2015"
                    },
                    {
                        "release dates": "USA:13 April 2015"
                    },
                    {
                        "release dates": "Sweden:11 June 2015"
                    },
                    {
                        "release dates": "Netherlands:26 July 2015"
                    },
                    {
                        "release dates": "Germany:29 September 2015"
                    },
                    {
                        "release dates": "Germany:1 October 2016"
                    }],
                    "id": 215873,
                    "title": "(#1.1)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother Panto",
                "id": "4.231351",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "50690a435f121541a4c8565add955880",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "25"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:20 December 2004"
                    }],
                    "phonetic_code": "B2163",
                    "id": 259597,
                    "series_years": "2004-????",
                    "title": "Big Brother Panto",
                    "production_year": 2004
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Til Death",
                "id": "4.231428",
                "label": "production",
                "props":
                {
                    "episode_nr": 6,
                    "kind": "episode",
                    "md5sum": "1d2a9396703744179ece2ae0aceb53b9",
                    "full_info": [
                    {
                        "quotes": "Dr. Tom: \"There's a crack in everything. That's how the light gets in.\" Leonard Cohen."
                    },
                    {
                        "soundtrack": "\"Brother Down\" Written by 'Sam Roberts (I)' (qv) Performed by 'Sam Roberts (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Get Busy\" Written by 'Sean Paul (I)' (qv) (as Sean Paul Henriques), Stephen Marsden Performed by 'Sean Paul (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Don't Know Why\" Written by 'Jessie Harris (I)' (qv) Performed by 'Norah Jones (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Minuet from String Quintet in E, Op. 13, No. 5\" Written by 'Luigi Boccherini' (qv)"
                    },
                    {
                        "plot": "In the lead up to Sam and Josh's wedding, Erica and Ryan, Josh's best man, have been dating, publicly announcing the fact, making Erica uncomfortable. The fact that Ethan and Claire may have reconciled isn't helping either. But topping Erica's uncomfortable list in the relationship department is Sam and Josh themselves, their relationship which she just does not understand. She can't help but feel that they are making a big mistake in getting married. She feels even worse when Sam herself expresses the same doubts just before the ceremony. With Dr. Tom, Erica dictates to him where she wants to go: August 13, 2003, the day that Sam and Josh broke up for the one and only time during their relationship. Then, Erica convinced Josh to reconcile. This time, she will do no such thing. Dr. Tom obliges Erica's wish. Back at that break up, Erica directly learns from Josh not only the nature of Sam and Josh's relationship, but what is truly in his heart and why he has always acted with animosity toward her. Erica has to decide what to do with this information. If she doesn't tell Sam, Sam could be making the biggest mistake in her life marrying Josh. If she does tell Sam, it could ruin her relationship with her sister."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:11 February 2009"
                    },
                    {
                        "release dates": "Netherlands:12 May 2009"
                    },
                    {
                        "release dates": "Australia:2 October 2009"
                    },
                    {
                        "release dates": "Hungary:1 November 2009"
                    },
                    {
                        "release dates": "Japan:21 August 2010"
                    },
                    {
                        "release dates": "Germany:10 February 2011"
                    }],
                    "phonetic_code": "T43",
                    "id": 241706,
                    "title": "Til Death",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Being Erica",
                "id": "4.231842",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(Germany)",
                        "kind": "tv series",
                        "md5sum": "c23da43c13a3d5aa062878b46e7be5d0",
                        "aka_title": "Being Erica - Alles auf Anfang",
                        "phonetic_code": "B5262",
                        "production_year": 2009
                    },
                    {
                        "note": "(Canada: English title) (working title)",
                        "kind": "tv series",
                        "md5sum": "5763e3b5bd376b45a2eb717060e8cceb",
                        "aka_title": "The Session",
                        "phonetic_code": "S25",
                        "production_year": 2008
                    }],
                    "kind": "tv series",
                    "md5sum": "a797ec3a02cf67b6a8173cb182c4689c",
                    "full_info": [
                    {
                        "trivia": "The theme song is performed by Canadian independent singer-songwriter Lily Frost who wrote it with Trevor Yuile."
                    },
                    {
                        "printed media reviews": "Logan, Michael. \"Logan Rave: Being Erica\". In: \"TV Guide\" (USA), Iss. V 59, N 5, 24 January 2011, Pg. 97, (MG)"
                    },
                    {
                        "plot": "\"Therapist\" Dr. Tom - who is constantly spouting famous and not so famous historical quotes - is Erica Strange's savior and worst enemy. Erica, a young adult woman, is having a bad life because of the bad decisions she's made. Erica provides Dr. Tom with a long list of those pivotal moments in her life that she feels have led to the bad state she is in today. Erica is initially unaware of what Dr. Tom is intending on doing with this list. What he does do is transport her back in time to each of those moments so that she, with all the knowledge of her present day life, can make better decisions to fix her life. Regardless of these new decisions, Dr. Tom hopes that Erica will come to the realization that although the opinions of others about her life do matter, it's what she thinks of her decisions and her life that are more important."
                    },
                    {
                        "certificates": "Australia:M"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "genres": "Adventure"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Drama"
                    },
                    {
                        "genres": "Fantasy"
                    },
                    {
                        "genres": "Romance"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Canada"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Genesis HD Camera"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "taglines": "Life. Altered."
                    },
                    {
                        "taglines": "Life's what you remake of it."
                    },
                    {
                        "taglines": "She's going back to turn her life around."
                    },
                    {
                        "taglines": "It's not where you're going. It's who you are when you get there."
                    }],
                    "phonetic_code": "B5262",
                    "id": 241658,
                    "series_years": "2009-????",
                    "title": "Being Erica",
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Adultescence",
                "id": "4.231985",
                "label": "production",
                "props":
                {
                    "episode_nr": 5,
                    "kind": "episode",
                    "md5sum": "4cda54b46a052a826f59345b8c53d7ea",
                    "full_info": [
                    {
                        "quotes": "Jenny: You know, a baby shower is basically just rewarding someone for having sex. I have sex all the time. Where is my reward?::Erica Strange: I think it's the having sex part.::Jenny: Hmm."
                    },
                    {
                        "soundtrack": "\"String of Blinking Lights\" Written by Allison Shevernoha, Chris Hiebert, 'Andy Chase (I)' (qv) Performed by Paper Moon"
                    },
                    {
                        "soundtrack": "\"Grow\" Written by Jaylene Johnson, J.J. Heller, David Heller Performed by Jaylene"
                    },
                    {
                        "soundtrack": "\"Capricious Life\" Written by Marco DeFelice, 'Trevor Yuile' (qv) Performed by Marco Solo"
                    },
                    {
                        "soundtrack": "\"Girls Just Want to Have Fun\" Written by 'Robert Hazard (I)' (qv) Performed by 'Paula Brancati' (qv), 'Erin Karpluk' (qv)"
                    },
                    {
                        "soundtrack": "\"Girls Just Want to Have Fun\" Written by 'Robert Hazard (I)' (qv) Performed by 'Samantha Weinstein (I)' (qv), 'Raquel Cadilha' (qv)"
                    },
                    {
                        "soundtrack": "\"Hungry Eyes\" Written by 'Franke Previte' (qv), 'John DeNicola' (qv)"
                    },
                    {
                        "soundtrack": "\"Take On Me\" Written by 'Pål Waaktaar' (qv), 'Morten Harket' (qv), 'Magne Furuholmen' (qv) Performed by 'Dillon Casey (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Do You Love Me\" Written by 'Berry Gordy' (qv)"
                    },
                    {
                        "soundtrack": "\"Hava Nagila\" Traditional"
                    },
                    {
                        "copyright holder": "Session Productions Limited"
                    },
                    {
                        "plot": "Erica and Judith have a falling out over a misunderstanding regarding who Judith has chosen as her baby's godmother. Erica not being chosen reinforces her own negative perceptions of not feeling grown up. Dr. Tom sends Erica back to her Bat Mitzvah, appropriate not only because it was supposed to be her official transition into adulthood, but also that she walked out on that party just like she did with the baby shower she just hosted for Judith. Erica's Bat Mitzvah, on a theme of the movie _Dirty Dancing (1987)_ (qv), never lived up to hype and excitement she felt before the party. But Erica's adult sensibilities can now relive the party for what it was. She can also learn that an official event like a Bat Mitzvah does not nor need not have to mean she should feel like an adult."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "languages": "Hebrew"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:2 February 2009"
                    },
                    {
                        "release dates": "Netherlands:5 May 2009"
                    },
                    {
                        "release dates": "Australia:25 September 2009"
                    },
                    {
                        "release dates": "Hungary:25 October 2009"
                    },
                    {
                        "release dates": "Japan:14 August 2010"
                    },
                    {
                        "release dates": "Germany:3 February 2011"
                    }],
                    "phonetic_code": "A3432",
                    "id": 241661,
                    "title": "Adultescence",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "This Be the Verse",
                "id": "4.232048",
                "label": "production",
                "props":
                {
                    "episode_nr": 8,
                    "kind": "episode",
                    "md5sum": "d10df5a7f84eb75902aadce659064606",
                    "full_info": [
                    {
                        "goofs": "CHAR: Erica refers to the cantor by the name Lily Greenburg. However, in the end credits, the character's name is listed as Lily McFadden."
                    },
                    {
                        "goofs": "CHAR: Dr. Tom misquotes Yoda as \"There is no try, only do.\" The correct quote is \"Do, or do not. There is no try.\""
                    },
                    {
                        "quotes": "Erica Strange: Dr. Tom, I have tried for weeks to make things right with Sam.::Dr. Tom: As the wise master from the Dagobah Swamp once said, \"There is no try, only do.\"::Erica Strange: Did you just quote Yoda?::Dr. Tom: [in a Yoda styled grunt] Uh-hmm."
                    },
                    {
                        "soundtrack": "\"How Bizarre\" Written by 'Paul Fuemana' (qv), Alan Leo Jannson Performed by OMC"
                    },
                    {
                        "soundtrack": "\"Who Will Save Your Soul (iTunes Originals Version)\" Written by 'Jewel Kilcher' (qv) Performed by 'Jewel Kilcher' (qv) (as Jewel)"
                    },
                    {
                        "soundtrack": "\"Time Has Come Today\" Written by 'Joseph Chambers' (qv) (as Joseph Lamar Chambers), 'Willie Chambers' (qv) (as Willie Mack Chambers)"
                    },
                    {
                        "soundtrack": "\"Another Way To Cry\" Written by 'Justin Hines (I)' (qv) Performed by 'Justin Hines (I)' (qv)"
                    },
                    {
                        "copyright holder": "Session I Productions Limited"
                    },
                    {
                        "plot": "It's Yom Kippur, and there is much pressure within the Strange family for everyone to reconcile, especially Erica and Sam, but also Gary and Barb, the latter who has has always resented her husband's decision to be a rabbi, and Erica and Barb. Dr. Tom sends Erica back to Yom Kippur 1997 - the year following Leo's death - when Gary and Barb were having a fight over his spending so much time at the synagogue, with Erica siding with her father. In addition to Barb wanting a divorce following that incident, Erica and Barb's relationship has since been an antagonistic one. Erica vows this time to stay neutral in her parents' argument. Although she starts off being neutral, Erica learns more behind her parents' marital woes, which may change her attitude towards both. Dr. Tom tries to provide further insight by sending Erica even further back to 1974, to a hippie commune retreat that Gary and Barb went to shortly after they got married."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "languages": "Hebrew"
                    },
                    {
                        "languages": "German"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:25 February 2009"
                    },
                    {
                        "release dates": "Netherlands:26 May 2009"
                    },
                    {
                        "release dates": "Australia:16 October 2009"
                    },
                    {
                        "release dates": "Hungary:8 November 2009"
                    },
                    {
                        "release dates": "Japan:4 September 2010"
                    },
                    {
                        "release dates": "Germany:24 February 2011"
                    }],
                    "phonetic_code": "T2131",
                    "id": 241705,
                    "title": "This Be the Verse",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Beauty and the Geek",
                "id": "4.233520",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "690b229149b54bd4ff0bc6f663abec70",
                    "full_info": [
                    {
                        "plot": "British version of acclaimed US reality show - seven male geeks pair up with seven female beauties in a castle in Scotland. The objective? The geeks must teach their partners geeky things whilst the models must teach the geeks how to be a bit more cool and socially aware. Will the geeks act typically shy and socially inadequate around their heavily bosomed partners? How will the models react to differential equations? In each episode, the partners are put to the test to see how much they've taken on board, with the worst performing couple booted off, and the ultimate winners splitting £40,000."
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Blairquhan Castle, Blairquhan, South Ayrshire, Scotland, UK"
                    },
                    {
                        "runtimes": "48"
                    },
                    {
                        "release dates": "UK:7 April 2006"
                    }],
                    "phonetic_code": "B3532",
                    "id": 237221,
                    "series_years": "2006-2006",
                    "title": "Beauty and the Geek",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Hamburger Dinner Theater",
                "id": "4.234758",
                "label": "production",
                "props":
                {
                    "episode_nr": 5,
                    "kind": "episode",
                    "md5sum": "19c9082d57c04b47fba10f6c8306fb40",
                    "full_info": [
                    {
                        "quotes": "Linda: What is your problem with dinner theater?::Bob: I'll tell you what the problem is. It's not dinner, and it isn't theater either. It's like the imitation cheese of theater.::Gene: That sounds like fun. Imitation cheese is fun.::Linda: That's my boy, that's my big star."
                    },
                    {
                        "quotes": "Linda: Enter and be tained."
                    },
                    {
                        "quotes": "Louise: Two tickets left for Dreamatorium, the hit show that three people have been blogging about."
                    },
                    {
                        "soundtrack": "\"Pirates of Panache\" (uncredited) Written by 'Loren Bouchard' (qv) and 'John Dylan Keith' (qv) Performed by 'H. Jon Benjamin' (qv), 'John Roberts (L)' (qv), 'Larry Murphy (II)' (qv), and 'John Dylan Keith' (qv)"
                    },
                    {
                        "trivia": "Burger of the Day: Totally Radish Burger (Comes With Radish)"
                    },
                    {
                        "plot": "Linda knows Bob hates dinner theatre, so she lies and says she and her girlfriends are going to a strip club. But, Bob knows where she is really going. Mort, Linda and the kids talk Bob into letting Linda stage a dinner production at Bob's Burgers. Linda puts Gene in charge of sound effects and Mort in charge of visual effects. All 3 kids, Mort and Linda are in \"Dreamatorium,\" a musical murder mystery set in a morgue. On the second night, the show becomes a real \"hit.\" Will Bob kill Linda's dream...or will he commit to her art?"
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "New Zealand:PG"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:20 February 2011"
                    },
                    {
                        "release dates": "Hungary:31 October 2011"
                    },
                    {
                        "release dates": "Netherlands:4 April 2014"
                    }],
                    "phonetic_code": "H5162",
                    "id": 289730,
                    "title": "Hamburger Dinner Theater",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bob's Burgers",
                "id": "4.234943",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "b67fe5c4c2762027c07f5ba301cf6991",
                    "full_info": [
                    {
                        "crazy credits": "In the opening sequence for most episodes, the building to the right of Bob's restaurant changes every episode."
                    },
                    {
                        "crazy credits": "The end credits for every episode involve the Belchers and sometimes other characters doing various things."
                    },
                    {
                        "trivia": "Despite having three females in the Belcher family, Louise is the only female character to be voiced by a woman. Additionally, both of the Pesto twins are voiced by women; Laura and Sarah Silverman."
                    },
                    {
                        "trivia": "In the beginning credits, the building to the right of Bob's restaurant changes every episode. The signs for the building in Season 1 in order are: P.F.E.T.A (Meat is Murder), Trot's All Natural Fertilizer, Rent Reduced Crime Scene Special (with police tape around it), Meth I Can Methadone Clinic, Synthesizers! Synthesizers! Synthesizers!, Extra Moist Yog (hot yoga), The Horse Renderer, Attempted Crepe French Cooking School, STD-B Gone! Free Clinic, Rocky Refuge Raccoon Sanctuary (referenced in the episode), Bass Drum Emporium (The only 24 hour drum shop in town!), Magnum G.I. Colonoscopies, and Chris's Brisses."
                    },
                    {
                        "trivia": "To pitch the show to the Fox network, the creators of the show made a rough three minute demo of the scene where Bob and Linda are grinding the meat and Bob forgets their wedding anniversary. The differences between the demo and the scene in the actual show included very different character designs by Jay Howell, cruder animation and the Belchers were originally a family of cannibals, making burgers out of the flesh of their victims. However, Fox found the idea of cannibalism too dark for an animated sitcom so it was taken out. Although, this led to the plot of the first episode where the family is accused by the health inspectors of being cannibals."
                    },
                    {
                        "trivia": "Bob's friend Mort runs a funeral parlour and crematorium. Mort actually means death in French and other languages."
                    },
                    {
                        "trivia": "In the pilot demo for the show, the character of Tina Belcher does not appear. Instead, the eldest Belcher child is a son named Dan. Although Dan's appearance is distinct from Tina's, the two characters are voiced identically by Dan Mintz."
                    },
                    {
                        "trivia": "An ongoing joke in the series is the fact that the building to the right of Bob's Burgers changes every episode. In Season 2 the building's signs in order are: Uncle Marty's Breast Pumps, Hannibal's Dead Animals Taxidermy, Pookah Pagoda Pookah Shell Warehouse, A Fridge Too Far Used Appliances (Clearance Sale), That's Improv-able Improv Theater (Tickets on Sale Now), Stickers For Men (Now Open), Grindecologist Coffee Shop S (possibly \"Supply\"), Valley of the Doilies (Sale 50% off), and Yes, Wire Hangers."
                    },
                    {
                        "trivia": "The daughters 'Tina' and 'Louise' are named for actress Tina Louise, best known as the original Ginger Grant on Gilligan's Island."
                    },
                    {
                        "trivia": "The Belcher Kids and their friends attend Wagstaff Middle School, which is named for Professor Quincy Adams Wagstaff, the character played by 'Groucho Marx' (qv) in the movie _Horse Feathers (1932)_ (qv). Compounding this nod to the Marx Bros. classic, Louise's nemesis Logan attends Huxley High School which takes it's name from Huxley University, over which Professor Wagstaff presided."
                    },
                    {
                        "trivia": "The cast records their dialogue together for every episode. Some of the cast live in New York City while the rest live in Los Angeles so they record over an ISDN line."
                    },
                    {
                        "trivia": "It is revealed that the characters live in New Jersey as it was shown in It Snakes a Village."
                    },
                    {
                        "trivia": "Tina is the only Belcher so far to have her middle name revealed. It is Ruth."
                    },
                    {
                        "trivia": "There is actually a Bob's Burgers restaurant chain based in Rio, Brazil; Albuquerque, New Mexico; and Bellingham, Washington"
                    },
                    {
                        "trivia": "There is also a chain of Bob's Burgers in NW WA state (US); Bellingham, WA, and also Eugene, OR"
                    },
                    {
                        "trivia": "There is a chain of Bob's Burgers in Albuquerque, NM"
                    },
                    {
                        "trivia": "There is an actual Bob's Burgers restaurant in Westminster, CA on Beach Blvd."
                    },
                    {
                        "trivia": "Bob appears in S4 E1 of Archer \"Fugue and Riff\"."
                    },
                    {
                        "trivia": "Two episodes find the Belcher kids dealing with an annoying girl named Courtney, played by David Wain, who directed Bob Belcher's voice actor H. Jon Benjamin in both the 2001 comedy Wet Hot American Summer and its recent prequel series on Netflix, First Day of Camp."
                    },
                    {
                        "trivia": "Practically every episode has at least one reference to flatulence, usually from Gene."
                    },
                    {
                        "trivia": "Many episodes contain at least two story lines."
                    },
                    {
                        "trivia": "In the opening of each episode when the exterminator van is parked in front of the restaurant for a second you can see Jimmy Pesto's reflection in the window of the van."
                    },
                    {
                        "trivia": "An exterminator van drives by the store front in every episode, with a different name."
                    },
                    {
                        "trivia": "The librarian in Season 3, Episode 16 is also the cheerleading coach in Season 4, Episode 20."
                    },
                    {
                        "trivia": "In the episode \"O.T. The Outside Toilet\" when Bob walks into the kitchen wearing a suit, Louise jokingly calls him Don Draper. Jon Hamm, who plays Don Draper on Mad Men, voices the toilet in this episode."
                    },
                    {
                        "trivia": "Linda and Gene are right-handed, Tina is left-handed, and Louise and Bob both appear to be ambidextrous."
                    },
                    {
                        "trivia": "H. Jon Benjamin, Jenny Slate, Megan Mullally, Aziz Ansari, Billy Eichner, Keegan-Michael Key, Rachel Dratch, Jon Glaser, Nick Offerman, Ben Schwarts, Tuc Watkins, Kathryn Hahn, and Henry Winkler have either starred or made an appearance on Parks and Recreation on NBC."
                    },
                    {
                        "trivia": "S5:E17 Gene says he needs to go to Miramar Naval Air Station. It has been Marine Corps Air Station Miramar since 1997, following base realignment and the closure commission and is located in the city of San Diego."
                    },
                    {
                        "trivia": "The name of the town the Belchers live in is Seymour's Bay, revealed by Loren Bouchard in Comic Con 2015."
                    },
                    {
                        "trivia": "The episode titled An Indecent Thanksgiving Proposal makes a reference to the Hayao Miyazaki animated film My Neighbor Totoro when Lance the turkey comes to life in Bob's absinthe-induced dream."
                    },
                    {
                        "trivia": "SPOILER: The librarian in season 3 episode 16 is also the cheerleading coach in season 4 episode 20."
                    },
                    {
                        "trivia": "We know that Bob's mother's maiden name is Lombard."
                    },
                    {
                        "trivia": "The word \"cancelled\" is misspelled on the news about lobster fest."
                    },
                    {
                        "trivia": "The intro reveals to us that as the events of the intro take place, Jimmy Pesto is standing across the street with his hands on his hips (probably glaring at Bob) watching the intro as we see it. Next time you watch look for his reflection in the car window of the exterminator van that pulls up."
                    },
                    {
                        "trivia": "Bento Box (the company that makes Bob's Burger's) is the same company that Dan Aykroyd and Judy Belushi teamed up with to make the Blues Brothers Animated Series, which was canceled, before it aired."
                    },
                    {
                        "trivia": "In S4:E9 \"Slumber Party\", during the scene where Linda is telling Bob that the raccoon Little King Trashmouth is hiding under their bed, a picture from Bob and Linda's wedding day is hanging on the wall. They were married at city hall."
                    },
                    {
                        "trivia": "So far, we have never seen Louise without a hat of some kind."
                    },
                    {
                        "trivia": "The science teacher is also the PE teacher."
                    },
                    {
                        "trivia": "During Season 1, Episode 8, at 9:35ish, a drawing of a dentist can be seen in the background. Louise's hat makes it appear as if he's wearing a dress and posing as one of Charlie's Angels."
                    },
                    {
                        "trivia": "SPOILER: In S4 E3, \"Seaplane!\", at 17:07, there is a glitch when part of the rope connecting the seaplane to Mr. Fischoeder's boat is not there."
                    },
                    {
                        "book": "Bouchard, Loren and the writers of Bob's Burgers. \"The Bob's Burgers Burger Book: Real Recipes for Joke Burgers\". (USA), Rizzoli, 22 March 2016, Pg. 128, (BK), ISBN-13: 9780789331144"
                    },
                    {
                        "production process protocol": "Battaaglio, Stephen. \"Holiday Preview\". In: \"TV Guide\" (USA), Vol. 60, Iss. 49, 3 December 2012, Pg. 25, (MG)"
                    },
                    {
                        "plot": "Bob Belcher and wife, Linda, love one other and their kids: Tina, Gene and Louise. Together, they run Bob's Burgers where the food is great but life always gets in the way of business."
                    },
                    {
                        "plot": "Bob's Burgers centers on the Belcher family (consists of Bob, Linda, Tina, Gene and Louise) who own a hamburger restaurant. Bob's burgers are really delicious and appear to be better than his rivals' but when it comes to selling burgers, his kids aren't really helpful, as more customers head over to Jimmy Pesto's restaurant."
                    },
                    {
                        "certificates": "Australia:M"
                    },
                    {
                        "certificates": "Canada:14+"
                    },
                    {
                        "certificates": "Canada:G"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "New Zealand:M"
                    },
                    {
                        "certificates": "USA:TV-PG"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Animation"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    }],
                    "phonetic_code": "B1216",
                    "id": 289686,
                    "series_years": "2011-????",
                    "title": "Bob's Burgers",
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "She's Lost Control",
                "id": "4.237383",
                "label": "production",
                "props":
                {
                    "episode_nr": 11,
                    "kind": "episode",
                    "md5sum": "1c459ca6c9d88096b6b62273a3ab98ac",
                    "full_info": [
                    {
                        "soundtrack": "\"Reunion\" Performed by 'Stars' (qv) Written by 'Torquil Campbell' (qv), Evan Cranley, Amy Milan, Chris Seligman, Patrick McGee Publisher: Arts & Crafts Music Master courtesy of Arts & Crafts International"
                    },
                    {
                        "soundtrack": "\"Reunion\" Written by 'Torquil Campbell' (qv), Evan Cranley, Amy Milan, Chris Selligman, Patrick McGee Performed by Star"
                    },
                    {
                        "soundtrack": "\"Every Little Thing\" Written by 'Melanie Doane' (qv) Performed by 'Melanie Doane' (qv)"
                    },
                    {
                        "copyright holder": "Session I Productions Limited"
                    },
                    {
                        "plot": "Erica has much on her mind. She wants to be there for Judith, who is facing new motherhood issues. She has been given the responsibility of organizing the launch of Katie's book at a book fair. But in this task, she unknowingly has turned into her worst nightmare: a replica of Julianne. And she is still trying to avoid Ethan, who knows that she's avoiding him. There may be a connection between the control she's exerting in the book launch and the control she's trying to exert in a relationship between herself and Ethan. As Dr. Tom allows her to add to her list, she wants to go back to the night of her high school reunion when she and Ethan kissed, what she feels is the beginning of the end of their friendship. Dr. Tom warns her and she realizes that taking back the kiss will not remove the feelings she has for him. Although Erica does manage to avoid the kiss, she quickly realizes that going back in time may actually provide an opportunity to rewrite totally the nature of her and Ethan's relationship."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Nicholas Hoare - 45 Front Street East, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "St. George Campus, University of Toronto, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:18 March 2009"
                    },
                    {
                        "release dates": "Netherlands:June 2009"
                    },
                    {
                        "release dates": "Netherlands:13 October 2009"
                    },
                    {
                        "release dates": "Australia:6 November 2009"
                    },
                    {
                        "release dates": "Hungary:22 November 2009"
                    },
                    {
                        "release dates": "Japan:25 September 2010"
                    },
                    {
                        "release dates": "Germany:17 March 2011"
                    }],
                    "phonetic_code": "S2423",
                    "id": 241691,
                    "title": "She's Lost Control",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Art Crawl",
                "id": "4.237749",
                "label": "production",
                "props":
                {
                    "episode_nr": 8,
                    "kind": "episode",
                    "md5sum": "9200b9e7b0441e374226f8f5c47db59f",
                    "full_info": [
                    {
                        "quotes": "Louise: So you want to be real artists. It's okay. I can sell that angle. But you two have to go all the way. One of you has to lose an ear!::Tina: I need both ears to hold up my glasses.::Louise: What about you? What's your excuse?::Gene: Don't have one. Have at it!"
                    },
                    {
                        "quotes": "Louise: That's very manipulative, dad. I can see where I get it from.::Bob: You should see my taxes."
                    },
                    {
                        "quotes": "Louise: What will it take to get you into this rhino anus today?"
                    },
                    {
                        "quotes": "Gene: Is dad going to jail?::Tina: I'll wave at you every day.::Louise: Word of advice: don't tell them what you're in for.::Gene: I hope our new dad is blond."
                    },
                    {
                        "quotes": "Louise: I've been honest with these two ever since Gene got too fat.::Gene: I remember the ice-cream sandwich that did it too. I regret nothing!::Louise: And Tina, you have bad breath.::Tina: Not if you're a fish."
                    },
                    {
                        "soundtrack": "\"Butts, Butts, Butts\" (uncredited) Written by 'Loren Bouchard' (qv) and 'John Dylan Keith' (qv) Performed by 'Jim Dauterive' (qv), 'Tobias Conan Trost' (qv), 'Chuck Smith (X)' (qv), 'Matt Beville' (qv), and 'John Dylan Keith' (qv)"
                    },
                    {
                        "trivia": "Burger of the Day: Poblano Picasso Burger & Salvador Cauliflower Burger"
                    },
                    {
                        "trivia": "The second burger of the day gets switched with one of Gale's paintings of a monkey for one line."
                    },
                    {
                        "trivia": "The anus paintings are consistent with works done by 'Salvador Dalí' (qv), for whom the \"Salvador Cauliflower Burger\" special is named, and the Surrealist art movement."
                    },
                    {
                        "plot": "When Linda asks Bob to let her sister hang her paintings in the restaurant for Art Week, Bob finds he's forced to contend with the city's Art Council, a shady troop of intimidating old ladies who control the art exhibited around town. Meanwhile, Louise, Gene and Tina are thrilled by all the attention their own art receives in the restaurant."
                    },
                    {
                        "plot": "Gayle, Linda's sister, created dozens of paintings for this year's Art Crawl. Linda coerces Bob into hanging them at Bob's Burgers. The paintings have a central theme and they make Bob, customers and some of the family uncomfortable. Louise is bitten by the Art Crawl bug; she orders her classmates, Andy, Ollie and Devin to produce touristy junk for Louise to flog mercilessly along the boardwalk. Bob thinks Gayle's art is complete crap; he starts to toss it until the crone of Art Crawl Association declares Gayle's art is \"prohibited\" by the ACA. There is nothing illegal about Gayle's art. Bob will be damned before he sits still in his own restaurant to be censored by Edith the Crone or by anyone else. If a person wants to have a bit of fun and \"show his butt\" within the law at Bob's Burger, it will not be the ACA or the government, but rather, Bob Belcher who controls it."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:20 March 2011"
                    },
                    {
                        "release dates": "Hungary:21 November 2011"
                    },
                    {
                        "release dates": "Netherlands:9 April 2014"
                    }],
                    "phonetic_code": "A6326",
                    "id": 289694,
                    "title": "Art Crawl",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.4)",
                "id": "4.246856",
                "label": "production",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "3a96d5d00fc838cfdf34d25a885583a4",
                    "full_info": [
                    {
                        "plot": "Transsexual restaurant manageress Helen is plagued by ex-boyfriend Eddie, who refuses to believe that they are through and not only stalks her but uploads a racy film of her on the Internet. In a time of crisis Helen finds that her best friends are her family, who see her through it and give her a happy birthday."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "24"
                    },
                    {
                        "release dates": "UK:12 February 2015"
                    },
                    {
                        "release dates": "Netherlands:28 July 2015"
                    }],
                    "id": 215876,
                    "title": "(#1.4)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Erica the Vampire Slayer",
                "id": "4.246978",
                "label": "production",
                "props":
                {
                    "episode_nr": 12,
                    "kind": "episode",
                    "md5sum": "0c2a1f1974699479765618421329928d",
                    "full_info": [
                    {
                        "goofs": "DATE: In Erica's flashback to 2001, a logo belonging to the store \"Winners\" can be seen in the background as she walks on the street. That logo is the one used by the store from 2009 onward."
                    },
                    {
                        "goofs": "DATE: While Erica is talking to Dr. Tom (who is dressed as a mime), a partial sign can be viewed of Winner's, a Toronto chain clothing store. Although this episode is set in 2001, the Winner's location shown (41 Front St. E., Toronto) didn't open until Fall 2007."
                    },
                    {
                        "soundtrack": "\"Down at Kenny's\""
                    },
                    {
                        "soundtrack": "\"Lust for Love\" Written by Joe Vizvary, Dale Martindale, Don Gordon, Gary Smith, 'Cevin Key' (qv) (as Kevin Crompton), Glen Nelson Performed by Images in Vogue"
                    },
                    {
                        "soundtrack": "\"Sparkle and Shine\" Written by Trevor Thornton Hayhurst, Daniel Douglas Yaremko, Robert Arthur Morfitt Performed by 'Econoline Crush' (qv)"
                    },
                    {
                        "copyright holder": "Session I Productions Limited"
                    },
                    {
                        "plot": "Erica should be happy as she has just been promoted to junior editor (pending sign off by Galvin and a final stamp of approval by Julianne) and is in the new romantic phase of her relationship with Ethan. But Ethan is having problems with Claire, who is threatening to sue for spousal support, despite coming from a family with money. And Erica is facing challenges in her new job, namely the aspect of firing people, most specifically writer Linda Kaplan, a woman who Erica has never even met. Since Erica feels that firing people is outside of her comfort zone, an upset Julianne sends Erica to a management seminar, a seminar in which Erica fails miserably. Erica likens her current work predicament to a past relationship with Ivan Frankel, who she called IF. IF was a man she abandoned without even a goodbye as she did not want to confront him about his Vampire LARPs (Live Action Role Plays). These LARPS were an activity in which he was passionately involved but Erica didn't want to partake. Erica vows to take a stand this time around and tell IF that she doesn't want to see him anymore. However, as she thinks about Ethan who has always bowed to Claire's wishes and not taken a stand against her, Erica, on Dr. Tom's urging, thinks that going to the Vampire LARP is also what she needs the second time around."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:25 March 2009"
                    },
                    {
                        "release dates": "Netherlands:June 2009"
                    },
                    {
                        "release dates": "Netherlands:20 October 2009"
                    },
                    {
                        "release dates": "Australia:13 November 2009"
                    },
                    {
                        "release dates": "Hungary:22 November 2009"
                    },
                    {
                        "release dates": "Japan:2 October 2010"
                    },
                    {
                        "release dates": "Germany:24 March 2011"
                    }],
                    "phonetic_code": "E6231",
                    "id": 241673,
                    "title": "Erica the Vampire Slayer",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.2)",
                "id": "4.250017",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "913754ab3d94e1b4704513d95cbc1c14",
                    "full_info": [
                    {
                        "plot": "Vivienne 'Scotty' Scott, carer for her ailing mother, becomes besotted with housewife Yvonne Burgess whom she sees in a supermarket, deeming her beautiful. Helped by Henry and Dean she tracks her down and begins stalking her. Yvonne's husband Gary angrily warns her off but later Yvonne arranges to meet Scotty, revealing that Scotty's attention to her has caused her to make a life-changing decision."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:29 January 2015"
                    },
                    {
                        "release dates": "Netherlands:27 July 2015"
                    }],
                    "id": 215874,
                    "title": "(#1.2)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Dr. Tom",
                "id": "4.250969",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "4a4417e1dd030157c3772b37e2669444",
                    "full_info": [
                    {
                        "goofs": "DATE: The ambulance at the end of the prom is post 2000 Ford Econoline. The scene was of Erica at high school 17 years previously. The ambulance wouldn't be manufactured for at least 10 years."
                    },
                    {
                        "quotes": "Dr. Tom: I, for my part, will promise you that you will emerge from therapy with your problem solved.::Erica Strange: Isn't that a lot of pressure for you?::Dr. Tom: Pressure makes diamonds."
                    },
                    {
                        "quotes": "Dr. Tom: If life's journey be endless where is its goal? The answer is, it is everywhere."
                    },
                    {
                        "quotes": "Dr. Tom: Do not weep; do not wax indignant. Understand."
                    },
                    {
                        "soundtrack": "\"Tricks Are for Kids\" Written by 'Lauren Evans (V)' (qv), Mark Fiest Performed by 'Lauren Evans (V)' (qv)"
                    },
                    {
                        "soundtrack": "\"It's a Lovely Day Today\" Written by 'Irving Berlin (I)' (qv) Performed by 'Stacey Kent'"
                    },
                    {
                        "soundtrack": "\"Where Does the Good Go\" Written by 'Tegan Quin' (qv), 'Sara Quin (I)' (qv) Performed by 'Tegan and Sara' (qv)"
                    },
                    {
                        "soundtrack": "\"Tainted Love\" Written by 'Ed Cobb (I)' (qv) Performed by Neverending White Lights"
                    },
                    {
                        "soundtrack": "\"There She Goes\" Written by Lee Anthony Mavers Performed by LA's"
                    },
                    {
                        "soundtrack": "\"My Old School\" Written by Christian Crippin, 'Jacob Hoggard' (qv), Thomas Walter MacDonald, Dave Rosin Performed by 'Steely Dan' (qv)"
                    },
                    {
                        "soundtrack": "\"Roam\" Written by 'Kate Pierson (I)' (qv), 'Fred Schneider (I)' (qv), 'Keith Strickland (I)' (qv), 'Cindy Wilson (I)' (qv), Robert Waldrop Performed by 'The B-52's' (qv)"
                    },
                    {
                        "soundtrack": "\"Right Here Right Now\" Written by Michael James Edwards Performed by 'Jesus Jones' (qv)"
                    },
                    {
                        "soundtrack": "\"It Must Have Been Love\" Written by 'Per Gessle' (qv) Performed by 'Roxette' (qv)"
                    },
                    {
                        "soundtrack": "\"Wishing Well\" Written by 'Terence Trent D'Arby' (qv), Sean Oliver Performed by 'Terence Trent D'Arby' (qv)"
                    },
                    {
                        "soundtrack": "\"Free Your Mind\" Written by 'Thomas McElroy (II)' (qv), 'Denzil Foster' (qv) Performed by 'En Vogue' (qv)"
                    },
                    {
                        "soundtrack": "\"Can't Touch This\" Written by 'Rick James (II)' (qv), 'Alonzo Miller' (qv), 'M.C. Hammer' (qv) Performed by 'M.C. Hammer' (qv)"
                    },
                    {
                        "soundtrack": "\"More Than Words\" Written by 'Nuno Bettencourt' (qv), 'Gary Cherone' (qv) Performed by 'Extreme (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Yesterday Man\" Written by 'James Robertson (XII)' (qv), 'Roz Bell' (qv) Performed by 'Roz Bell' (qv)"
                    },
                    {
                        "trivia": "Sarah Gadon (Katie Atkins) and Joanna Douglas (Samantha Strange) have both appeared in the TV show '11.22.63'. They played Sadie Dunhill and Doris Dunning respectively."
                    },
                    {
                        "copyright holder": "© Session Productions Limited 2008"
                    },
                    {
                        "filming dates": "7 November 2007 - 17 November 2007"
                    },
                    {
                        "plot": "Thirty-two year old Erica Strange is bright, educated and pretty, but she's had a bad life, self admittedly due to the many bad decisions she's made over her adult life. On the day that she meets self-proclaimed therapist Dr. Tom in the hospital, Erica has had the latest in a string of bad days: she gets fired from her dead end customer service job at an insurance agency for being too bright; she gets dumped by her latest boyfriend who she met over the Internet; and she gets hospitalized for drinking a specialty coffee containing nuts, she being deathly allergic to nuts. Feeling overwhelmed by the pity showed by her family, Erica decides on a whim to enlist the help of Dr. Tom, who guarantees he can fix all her problems if she commits to his service. Unbeknownst to Erica, Dr. Tom is not quite who he appears. Erica provides Dr. Tom with a long list of those bad decisions which she most regrets, those she terms as keeping her awake at night. From the list, Dr. Tom chooses Erica's eleventh grade formal, where she got drunk and danced crazily on the dance floor, which in turn resulted in getting a \"reputation\" and being dumped by her then boyfriend, Noah. Without telling her beforehand, Dr. Tom magically transports Erica back to that time. Although Erica has the opportunity to right the wrong decisions she's made in the eleventh grade, she, with full knowledge of who she is as a thirty-two year old, now has a warped view of teen-aged life and makes her new eleventh grade decisions based on that. She also feels like she's in limbo as Dr. Tom gives her no indication if she's transported back in time forever or when, if ever, she will return to the present day."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "60"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:5 January 2009"
                    },
                    {
                        "release dates": "USA:19 February 2009"
                    },
                    {
                        "release dates": "Netherlands:7 April 2009"
                    },
                    {
                        "release dates": "Australia:28 August 2009"
                    },
                    {
                        "release dates": "Hungary:27 September 2009"
                    },
                    {
                        "release dates": "Japan:17 July 2010"
                    },
                    {
                        "release dates": "Germany:6 January 2011"
                    },
                    {
                        "release dates": "Sweden:19 September 2011"
                    }],
                    "phonetic_code": "D635",
                    "id": 241672,
                    "title": "Dr. Tom",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Human Flesh",
                "id": "4.251526",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "798399e04df7fa001a35d5282389cde9",
                    "full_info": [
                    {
                        "goofs": "SYNC: When Bob is talking to his family through the broken store window, you can see his reflection and at one point he is talking with his eyes open yet his reflection still has them closed."
                    },
                    {
                        "quotes": "Bob Belcher: Tina you're on the grill.::Tina Belcher: My crotch is itchy.::[Gene and Louise groan in disgust]::Bob Belcher: Okay, are you telling me as my daughter, or as my grill cook?::Tina Belcher: Um, as...::Bob Belcher: Because my grill cook would never tell me that.::Tina Belcher: Oh.::Bob Belcher: Also, my daughter should probably not say anything like that to me. Tell her, tell your mom."
                    },
                    {
                        "quotes": "Bob Belcher: Today's your birthday?::Linda Belcher: Yes, Bob!::Bob Belcher: Today's my birthday?::Linda Belcher: Yes, Bob!::Bob Belcher: Your due date was today?::Linda Belcher: Yes, Bob!::Bob Belcher: How'd it go?::Linda Belcher: How do you think it... good, it went very well!::Bob Belcher: That's good. Boy or girl?"
                    },
                    {
                        "quotes": "Louise Belcher: Hello, welcome to Bob's Burgers. The burger of the day is \"The Child Molester\". It comes with candy, get it?"
                    },
                    {
                        "quotes": "Ron: He's right isn't he? We can test his meat right here in the mobile lab, can't we? We liquefy it, add the enzyme. If it's yellow, salmonella, if it's chartreuse, it's a deuce, and if it's blue, it's your aunt Sue."
                    },
                    {
                        "trivia": "The plot of this episode is taken from the original concept that the Belchers were supposed to be a family of cannibals."
                    },
                    {
                        "trivia": "Burger of the Day: \"New Bacon-ings\" - comes with bacon"
                    },
                    {
                        "trivia": "In this episode it is supposedly labor day weekend. Which is why it is a long weekend and busy time at the wharf. When Hugo takes the samples he says he can't test them since the office is closed until Monday, however, if it is Labor Day weekend the office would be closed on Monday."
                    },
                    {
                        "trivia": "SPOILER: Mort tells gene that he built a candy coffin for Mr Caffrey of the Caffrey Taffy Company. Later in episode 2.1 \"The Belchies,\" the factory being demolished is Caffrey's Taffy Factory."
                    },
                    {
                        "plot": "Louise wanted to \"up the ante\" at Show & Tell, so she told the class her dad, Bob, uses human remains in Bob's Burgers. Linda's jealous ex-fiancée, Hugo, is the new health inspector sent to investigate. Tina and Louise advise Linda to flirt with Hugo to keep the restaurant open. Hugo is an amateur poet: \"Inspector of health, inspector of pain. I came in search of human remains. And I found a piece of human flesh I thought I'd never see again---my heart.\" Gene makes a delivery next door to Mort the mortician. With kids, condiments, buttons, candy caskets and angry mobs: this may be one Labor Day - slash - Anniversary Bob and Linda Belcher never forget!"
                    },
                    {
                        "plot": "Bob rallies the team to cook up some business, so he sends middle child Gene to push samples in the streets, eldest daughter Tina to work the grill and youngest daughter Louise to staff the counter. The day takes an unexpected turn when the health inspector pays a visit because of a little rumor Louise started during \"show and tell\" at school."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "New Zealand:PG"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:9 January 2011"
                    },
                    {
                        "release dates": "Australia:26 January 2011"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "Hungary:3 October 2011"
                    },
                    {
                        "release dates": "Sweden:20 April 2012"
                    },
                    {
                        "release dates": "Netherlands:31 March 2014"
                    }],
                    "phonetic_code": "H5142",
                    "id": 289735,
                    "title": "Human Flesh",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.6)",
                "id": "4.251752",
                "label": "production",
                "props":
                {
                    "episode_nr": 6,
                    "kind": "episode",
                    "md5sum": "9a3e0caad0a1124e0b96f5d28cef5104",
                    "full_info": [
                    {
                        "soundtrack": "\"An Argument With Myself\" Performed by Jens Lekman"
                    },
                    {
                        "plot": "Amy, a neurotic who worries over the slightest thing, goes on a blind date with policewoman Kay but her obsessive behaviour gets the evening off to a bad start. Fortunately Kay is sympathetic - even when Amy interrupts their walk home to greet a 'Big Issue' seller she was afraid had died - and the evening does not end in disaster."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:26 February 2015"
                    },
                    {
                        "release dates": "Netherlands:29 July 2015"
                    }],
                    "id": 215878,
                    "title": "(#1.6)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Beauty and the Geek",
                "id": "4.252292",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(Australia)",
                        "kind": "tv series",
                        "md5sum": "36154cb3a255b9f7a5a142fa5cb54738",
                        "aka_title": "Beauty and the Geek USA",
                        "phonetic_code": "B3532",
                        "production_year": 2005
                    },
                    {
                        "note": "(USA) (alternative title)",
                        "kind": "tv series",
                        "md5sum": "c5862eadb98bd25615da392a1c2f142f",
                        "aka_title": "Beauty vs. Geek",
                        "phonetic_code": "B312",
                        "production_year": 2005
                    }],
                    "kind": "tv series",
                    "md5sum": "81847cca9c50b1303a680aa0b746faed",
                    "full_info": [
                    {
                        "trivia": "After the second season, the show was picked up by The CW because The WB merged with UPN to form The CW."
                    },
                    {
                        "printed media reviews": "Flynn, Gillian. \"Chics and Geeks (B+)\". In: \"Entertainment Weekly\" (USA), Vol. 858, 13 January 2006, Pg. 64, (MG)"
                    },
                    {
                        "certificates": "Australia:PG"
                    },
                    {
                        "certificates": "USA:TV-PG"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "genres": "Romance"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "60"
                    }],
                    "phonetic_code": "B3532",
                    "id": 237172,
                    "series_years": "2005-????",
                    "title": "Beauty and the Geek",
                    "production_year": 2005
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Crawl Space",
                "id": "4.259656",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "af07380574d962656f9dfffd91497394",
                    "full_info": [
                    {
                        "goofs": "CONT: The physics in the crawl space don't line up with the rest of the restaurant. At one point we see Bob stick his hand though a vent such that his arm can be seen by others. The vent is right next to the bathroom on the left (Bob's right); however, when we see him inside the crawl space, we see the void extending through where the bathroom should be."
                    },
                    {
                        "quotes": "Bob: I'm funny in the wall."
                    },
                    {
                        "quotes": "Louise: Dad, why do you get so mad when Grandma Gloria and Grandpa Al come over to visit? Do you hate them?::Bob: I don't hate them, just grandma. Well, I don't hate her, just the sounds she makes. And her voice. And the things she says."
                    },
                    {
                        "quotes": "Gloria: That bathroom is filthy. Who was the last one in there? You! Go back there and wipe the seat!"
                    },
                    {
                        "quotes": "Teddy: You want to stay inside the wall, Bob?::Bob: Don't judge me, Teddy. Don't judge me. Sometimes a man just needs to be alone with his crawlspace."
                    },
                    {
                        "quotes": "Mr. Frond: Three siblings in detention in two days. Is something happening at home?::Tina: Dad is stuck inside the wall.::Mr. Frond: Is that how he died?::Tina: Dad isn't dead.::Louise: Thanks a lot, Mr. Frond. We were keeping it a secret from her. We were going to tell her on Father's Day. Now we have nothing to do for Father's Day!"
                    },
                    {
                        "trivia": "There is multiple references to 'The Shining' in this episode"
                    },
                    {
                        "trivia": "Burger of the Day: Foot Feta-ish Burger"
                    },
                    {
                        "plot": "Linda's parents are coming to visit; they have to sleep in one of the kid's rooms. Bob, Gene and Louise learn more than they ever wanted to know about Tina's budding zombie-ality. Bob is not happy about the in-law visit; he uses fixing roof leaks to \"get stuck\" and hide in the walls. Bob asks home contractor, Teddy, to leave him in the wall for one more day and then Bob really gets stuck! Tina, Gene and Louise are officially Kids in Crisis and an alien protein may be taking over Bob's Burgers. It's up to Kuchi Kopi, cocktails... and Grandma Gloria to get Bob out of this mess."
                    },
                    {
                        "plot": "When Bob learns that Linda's mother is coming for a visit, he wants nothing to do with it. Linda has been cracking the whip at home, making sure every shelf has been dusted and every bed has been made. When she discovers a leak in the roof, she sends Bob to fix it, but he gets stuck in a wall, leaving Linda and the kids to entertain their guests and run the restaurant."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "New Zealand:PG"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:16 January 2011"
                    },
                    {
                        "release dates": "Australia:2 February 2011"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "Hungary:10 October 2011"
                    },
                    {
                        "release dates": "Netherlands:1 April 2014"
                    }],
                    "phonetic_code": "C6421",
                    "id": 289712,
                    "title": "Crawl Space",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother Diaries",
                "id": "4.261325",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "5177ccdc960c46e1db115a5f851d9251",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Documentary"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "UK:15"
                    },
                    {
                        "release dates": "UK:July 2003"
                    }],
                    "phonetic_code": "B2163",
                    "id": 259294,
                    "series_years": "2003-????",
                    "title": "Big Brother Diaries",
                    "production_year": 2003
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Such a Perfect Day",
                "id": "4.261956",
                "label": "production",
                "props":
                {
                    "episode_nr": 7,
                    "kind": "episode",
                    "md5sum": "da305fd45e5ee77e252b7ca90ed1d2a1",
                    "full_info": [
                    {
                        "goofs": "CHAR: Dr. Tom attributes the quote, \"You can complain because roses have thorns, or you can rejoice because thorns have roses\" to Zig Ziglar. However, the quote is by cartoonist Tom Wilson through his comic strip character, Ziggy."
                    },
                    {
                        "goofs": "CONT: Erica and Sam go from being drenched from playing in the water fountain to being completely dry only a short while later."
                    },
                    {
                        "quotes": "Dr. Tom: \"You can complain because roses have thorns, or you can rejoice because thorns have roses.\" Zig Ziglar.::Erica Strange: Man, who's he?::Dr. Tom: Oh God, I don't know. I have no idea. The quote stuck, though."
                    },
                    {
                        "soundtrack": "\"Angel's Serenade\" Courtesy of The Music People Ltd."
                    },
                    {
                        "soundtrack": "\"Venetian Wood\" Courtesy of The Music People Ltd."
                    },
                    {
                        "soundtrack": "\"Perfect\" Performed by 'Fairground Attraction' (qv) Written by Mark Edward Cascian Nevin Courtesy of Sony Music Entertainment Canada Inc."
                    },
                    {
                        "soundtrack": "\"Rhythm of My Heart\" Performed by 'Rod Stewart (I)' (qv) Written by 'John Capek' (qv) (as John Joseph Capek) and 'Marc Jordan (III)' (qv) (as Marc Wallace Jordan) Courtesy of Warner Music Canada Co."
                    },
                    {
                        "soundtrack": "\"Rhythm of My Heart\" Performed by 'Marc Jordan (III)' (qv) Written by 'John Capek' (qv) (as John Joseph Capek) and 'Marc Jordan (III)' (qv) (as Marc Wallace Jordan) Courtesy Cafe Records"
                    },
                    {
                        "copyright holder": "Session I Productions Limited"
                    },
                    {
                        "plot": "Erica is facing a lot of stress in her life. Sam is no longer talking to her and never wants to see her again. Marcus Stahl wants to renege on the book deal of writing his memoirs since he can't visit that dark place in his past. Because she feels her sessions with Dr. Tom have so far made her life worse than better, she wants to quit. However, Dr. Tom offers her a gift because of her stress: he will send her back to any day she wants where she was the cause of the day being perfect. She chooses a time as a teenager, taking a day trip to Toronto Island with Leo and Sam, to get away from their arguing parents who looked to be on the verge of divorce. One importance of this day is that, as Erica states, it is the last big 'hurrah' between the three of them before Leo died. She vows not to change a thing about that day. However, her thirty-two year old sensibilities may factor into what she now decides to do. And any small change to the day may alter how perfect it was in her memory."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto Islands, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "44"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:18 February 2009"
                    },
                    {
                        "release dates": "Netherlands:19 May 2009"
                    },
                    {
                        "release dates": "Australia:9 October 2009"
                    },
                    {
                        "release dates": "Hungary:8 November 2009"
                    },
                    {
                        "release dates": "Japan:28 August 2010"
                    },
                    {
                        "release dates": "Germany:17 February 2011"
                    }],
                    "phonetic_code": "S2161",
                    "id": 241694,
                    "title": "Such a Perfect Day",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.3)",
                "id": "4.264151",
                "label": "production",
                "props":
                {
                    "episode_nr": 3,
                    "kind": "episode",
                    "md5sum": "32ad0130a96e892fe8f0f40035d14509",
                    "full_info": [
                    {
                        "plot": "Sian and Violet meet in the shoe shop where Sian works and Violet is so smitten that she engineers several return visits to secure a date. Sian takes Violet to meet her mother Vanessa, also a Lesbian, before moving in with her but the extrovert Violet is a carefree party girl whilst the more serious Sian is hard-working and ambitious and they are soon arguing. Maybe Vanessa can offer her daughter words of advice to heal the situation."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "28"
                    },
                    {
                        "release dates": "UK:5 February 2015"
                    },
                    {
                        "release dates": "Netherlands:28 July 2015"
                    }],
                    "id": 215875,
                    "title": "(#1.3)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother: Celebrity Hijack",
                "id": "4.267073",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "fbfed120e807e626d8ab0a4c54a0d5c0",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:3 January 2008"
                    }],
                    "phonetic_code": "B2163",
                    "id": 263097,
                    "series_years": "2008-????",
                    "title": "Big Brother: Celebrity Hijack",
                    "production_year": 2008
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Mi Casa, Su Casa Loma",
                "id": "4.267463",
                "label": "production",
                "props":
                {
                    "episode_nr": 10,
                    "kind": "episode",
                    "md5sum": "01f2b59544fff0a6e3a7c5d6f58144b2",
                    "full_info": [
                    {
                        "quotes": "Erica Strange: Sometimes, you're incredibly unhelpful.::Dr. Tom: [in a positive tone] Why, thank you."
                    },
                    {
                        "quotes": "Addison: In light of Miss Atkins' recent lapses in judgement she will spend the day polishing knobs."
                    },
                    {
                        "soundtrack": "\"Somebody's Watching Me\" Written by 'Rockwell (I)' (qv) Performed by 'Rockwell (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Unbelievable\" Written by Ian Harvey Dench, James Saul Atkin, Zachary Sebastian Rex, James Foley, Mark Simon Decloedt, Derran Gene Brownson Performed by 'EMF' (qv)"
                    },
                    {
                        "plot": "After Erica's declaration of love to Ethan and his response that he can't feel the same as he's still married, Erica has been avoiding him. Erica feels even worse since her so called friend/nemesis since the age of five, Katie, is in town. Katie manages to maneuver a deal with River Rock Publishing to write a book around Julianne's latest idea - Katie was planning on using Erica's failed love life as its core. Dr. Tom decides to send Erica back to high school, to an unsanctioned Hallowe'en party held at Casa Loma, where Erica, Katie and Judith worked. Although the party was Katie's idea, Erica was the only one who had a key to get into the complex. Katie was fired over the incident, and Erica never took any responsibility, which she feels ruined her friendship with Katie. Erica vows not to hold the party at Casa Loma this time to save her friendship with Katie. But going back, Erica may not be able to change the past. She also learns the true nature of her friendship with Katie."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Bloor Cinema, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "Casa Loma, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "St. Lawrence Market, Toronto, Ontario, Canada"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:11 March 2009"
                    },
                    {
                        "release dates": "Netherlands:9 June 2009"
                    },
                    {
                        "release dates": "Australia:30 October 2009"
                    },
                    {
                        "release dates": "Hungary:15 November 2009"
                    },
                    {
                        "release dates": "Japan:18 September 2010"
                    },
                    {
                        "release dates": "Germany:10 March 2011"
                    }],
                    "phonetic_code": "M245",
                    "id": 241683,
                    "title": "Mi Casa, Su Casa Loma",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Blunder",
                "id": "4.268838",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "7f501a83e93d48bc26863d8816627ee6",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:23 November 2006"
                    }],
                    "phonetic_code": "B4536",
                    "id": 287849,
                    "series_years": "2006-????",
                    "title": "Blunder",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.5)",
                "id": "4.271813",
                "label": "production",
                "props":
                {
                    "episode_nr": 5,
                    "kind": "episode",
                    "md5sum": "654a5a79b20b7a42ed11ad4f82065c69",
                    "full_info": [
                    {
                        "soundtrack": "\"Wildfire\" Performed by 'SBTRKT'"
                    },
                    {
                        "plot": "18-year old law student Josh has a one night stand with predatory Freddie, mistakenly believing that he has found love, before returning to his small town home for the wedding of best friend Sophie. Josh explains to Sophie that she is too young to marry her dull bride groom and should aim to get more out of life. He was wrong about Freddie but, on the morning of the wedding, will Sophie believe that he is right about her?"
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:19 February 2015"
                    },
                    {
                        "release dates": "Netherlands:29 July 2015"
                    }],
                    "id": 215877,
                    "title": "(#1.5)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Sheesh! Cab, Bob?",
                "id": "4.271936",
                "label": "production",
                "props":
                {
                    "episode_nr": 6,
                    "kind": "episode",
                    "md5sum": "3a8ffb8ac2ae43e8cc5654e7a1db9a93",
                    "full_info": [
                    {
                        "quotes": "Bob: Why is everyone reading Tina's diary?::Gene: It's well written.::Louise: She's better on the page that in person.::Gene: And what if the Nazis get us and it's all we have of our family?"
                    },
                    {
                        "quotes": "Mr. Fischoeder: What if I don't get you an extension on your rent, but instead I give you the opportunity to earn some extra money on one of my side businesses?::Bob: That sounds sketchy.::Mr. Fischoeder: Oh, it is.::Bob: Oh.::Mr. Fischoeder: But you get to wear this hat.::Bob: Oh!"
                    },
                    {
                        "quotes": "Tina: You won't regret it, dad. When I kiss Jimmy Jr. under the disco ball, it'll be like we're all kissing Jimmy Jr under the disco ball.::Gene: I go first!::Louise: Really?::Gene: If I have to kiss him, I don't want to go after you guys.::Linda: I can go last. I don't mind.::Bob: We are not kissing Jimmy Jr!::Gene: [slams fists on table] Yes, we are!"
                    },
                    {
                        "quotes": "Linda: How are you holding out, sweetie?::Bob: Fine. I'm just a little tired. Also, I might be a pimp.::Louise: You're gonna need a bigger hat."
                    },
                    {
                        "quotes": "Linda: The boys hate dancing, and the girls won't go to the boys. It's like a Mexican stalemate out there.::Gene: Come on, boys, you're the peanut butter. Girls, you're the jelly. Let's make some sandwiches!"
                    },
                    {
                        "quotes": "Bob: Stupid Jimmy Pesto, with his crappy food and... all his customers."
                    },
                    {
                        "quotes": "Louise: Kissing is like a fight with lips."
                    },
                    {
                        "quotes": "Gene: Is this drool or sweat?::Linda: Both. Your father is a very moist sleeper."
                    },
                    {
                        "quotes": "Louise: So, Marshmallow. How did you get your name?::Marshmallow: Honey, just show me a sweet potato pie, and I'm on top of it.::Louise: I knew it!"
                    },
                    {
                        "quotes": "Tina: Dad, you're the best pimp a girl could ever have.::Bob: Oh, Tina. I've been waiting all my life to hear those words."
                    },
                    {
                        "quotes": "Louise: It's go-time, Tina. I want his grandkids to get hickeys."
                    },
                    {
                        "quotes": "Tina: I just kissed my first boy.::Mort: Me too.::Marbles: Oh, boo-hoo."
                    },
                    {
                        "soundtrack": "\"Lifting Up the Skirt of the Night\" (uncredited) Written by 'Loren Bouchard' (qv) and 'John Dylan Keith' (qv) Performed by 'John Roberts (L)' (qv) and 'H. Jon Benjamin' (qv)"
                    },
                    {
                        "trivia": "Burger of the Day: Thank God It's Fried Egg Burger"
                    },
                    {
                        "plot": "Tina is desperate to get her first kiss at her 13th birthday party. But after Louise breaks the deep fryer, Bob takes a second job as a late-night cab driver to pay for Tina's party. Things keep getting worse for Bob when the parents of Tina's crush refuse to let their son attend the party, and Bob has to do everything in his power to save his daughter's big day."
                    },
                    {
                        "plot": "Everyone reads Tina's diary which says she is not on drugs; it is well-written and if the Nazis get them, it could be all that is left of the Belcher family. Linda wants to throw her daughter an extra-special 13th birthday party. Tina wants a co-ed party with DJ, smoke machine, disco ball...and the perfect first kiss from Jimmy, Jr. Her party is going to be expensive, so Bob moonlights by driving a taxi at night for Fischoeder. Bob makes interesting new nighttime friends. The most expensive part of the party turns out to be Jimmy, Jr. The birthday girl is pretty in pink... and awaiting her prince. Will Bob be able to pay the price required to give his older daughter her fantasy \"Thirteen Candles\"?"
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:6 March 2011"
                    },
                    {
                        "release dates": "Hungary:7 November 2011"
                    },
                    {
                        "release dates": "Netherlands:7 April 2014"
                    }],
                    "phonetic_code": "S21",
                    "id": 289766,
                    "title": "Sheesh! Cab, Bob?",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bo! in the USA",
                "id": "4.273666",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "30e2921214b56b9c36543b290246eaa6",
                    "full_info": [
                    {
                        "certificates": "UK:15"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "USA:158"
                    },
                    {
                        "runtimes": "26"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:13 October 2006"
                    }],
                    "phonetic_code": "B532",
                    "id": 288200,
                    "series_years": "2006-????",
                    "title": "Bo! in the USA",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "What I Am Is What I Am",
                "id": "4.276048",
                "label": "production",
                "props":
                {
                    "episode_nr": 2,
                    "kind": "episode",
                    "md5sum": "a5a3865fe9fb2b39280d610e28ccd332",
                    "full_info": [
                    {
                        "soundtrack": "\"Everybody Knows\" Written by 'Leonard Cohen (I)' (qv), 'Sharon Robinson (I)' (qv) Performed by 'Concrete Blonde' (qv)"
                    },
                    {
                        "soundtrack": "\"What's Up\" Written by 'Linda Perry (IV)' (qv) Performed by '4 Non Blondes' (qv)"
                    },
                    {
                        "soundtrack": "\"No Words\" Written by 'Emilie Mover' (qv) Performed by 'Emilie Mover' (qv)"
                    },
                    {
                        "soundtrack": "\"People Are Strange\" performed by 'Echo & The Bunnymen' (qv) Composed by 'Jim Morrison (I)' (qv), 'John Densmore (I)' (qv), 'Ray Manzarek' (qv), 'Robby Krieger' (qv) Published by Doors Music Company Courtesy of Warner Music Canada All rights reserved. Used by permission."
                    },
                    {
                        "soundtrack": "\"Everybody Knows\" Performed by 'Concrete Blonde' (qv) Composed by 'Leonard Cohen (I)' (qv), 'Sharon Robinson (I)' (qv) Published by Stranger Music Inc. (BMI)/Sony/ATV LLC (BMI)/Robinhill Music/Sony ATV/Sharon Robinson Songs Courtesy of EMI Music Canada All rights reserved. Used by permission."
                    },
                    {
                        "soundtrack": "\"What's Up\" Performed by '4 Non Blondes' (qv) Composed by 'Linda Perry (IV)' (qv) Published by Struck In The Throat Music (ASCAP)/Sony/ATV Harmony (ASCAP) Courtesy of Universal Music Canada All rights reserved. Used by permission."
                    },
                    {
                        "soundtrack": "\"No Words\" Performed and Composed by 'Emilie Mover' (qv) Courtesy of Balonica Records and Indie Joe"
                    },
                    {
                        "copyright holder": "Session I Productions Limited 2009"
                    },
                    {
                        "plot": "In her current job search, Erica runs into Antigone Morris nee Kim, a rival from Erica's university days. Antigone's professional life seems successful, her success based in large part to her connections through Literati, a secret society from university, Literati members who support their own. Erica was invited to join Literati, but her gut told her at the time that if their pseudo-Gothic initiation ritual was anything like the club, it was not for her. Erica now regrets the decision not to join. Dr. Tom sends Erica back to second year at university when she was invited to join the group. Although Erica still realizes that Literati is in spirit not what she would be attracted to, she decides that one of the benefits of Literati membership is to discredit Claire, the now wife of her best friend, Ethan. Erica never really liked Claire but Erica's want to discredit Claire is based more on what she now knows about what Claire did to Ethan in present times. Erica's new decision has further reaching consequences than she realizes. Erica learns that there are many ways to achieve what she wants and that she does need to listen to her inner voice to tell her what is right and wrong for her. Meanwhile, back in present times, Erica is dismayed to learn from Dr. Tom that her time travel is only to change her own life and not that of others, as Erica's biggest regret is not being able to prevent her brother Leo's death."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "42"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:12 January 2009"
                    },
                    {
                        "release dates": "Netherlands:14 April 2009"
                    },
                    {
                        "release dates": "Australia:4 September 2009"
                    },
                    {
                        "release dates": "Hungary:4 October 2009"
                    },
                    {
                        "release dates": "Japan:24 July 2010"
                    },
                    {
                        "release dates": "Germany:13 January 2011"
                    }],
                    "phonetic_code": "W3523",
                    "id": 241712,
                    "title": "What I Am Is What I Am",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Big Brother's Little Brother",
                "id": "4.278069",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(UK) (short title)",
                        "kind": "tv series",
                        "md5sum": "5fcf74799081a992a49d0f8b32d41df6",
                        "aka_title": "B.B.L.B.",
                        "phonetic_code": "B141",
                        "production_year": 2001
                    },
                    {
                        "note": "(UK) (fifth season title)",
                        "kind": "tv series",
                        "md5sum": "bb96027d239dd1f0c0389850cb73cada",
                        "aka_title": "C.B.B.L.B.",
                        "phonetic_code": "C141",
                        "production_year": 2005
                    }],
                    "kind": "tv series",
                    "md5sum": "0310ac673fdac55a3018ad46958505c7",
                    "full_info": [
                    {
                        "plot": "Dermot O'Leary takes a behind the scenes look at the goings on in the UK's second season of Big Brother, featuring all the latest news, interviews with the housemates friends and family and co-presenters in the form of the evicted housemates."
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Elstree Studios, Borehamwood, Hertfordshire, England, UK"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:May 2001"
                    }],
                    "phonetic_code": "B2163",
                    "id": 262682,
                    "series_years": "2001-????",
                    "title": "Big Brother's Little Brother",
                    "production_year": 2001
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Spaghetti Western and Meatballs",
                "id": "4.279138",
                "label": "production",
                "props":
                {
                    "episode_nr": 9,
                    "kind": "episode",
                    "md5sum": "e90e46e3ea98c318469b20d71fcbf3a6",
                    "full_info": [
                    {
                        "quotes": "Choo-Choo: [to Bob] Let me go! This train is off the tracks. Choo-Choo!::Bob: Oh, I get the name now.::Gene: I always thought it was 'cause of how he chewed."
                    },
                    {
                        "quotes": "Bob: [When Bob and Gene are being chased by Choo Choo and his father] Run!::Gene: I can't! I've got this frigging guitar around my neck!"
                    },
                    {
                        "quotes": "Gene: [Holding a plunger] Dad, do we have a bigger one of these?::Bob: Why? What did you do.::Gene: Nothing yet. I just want to be prepared."
                    },
                    {
                        "quotes": "Bob: Mr. Frond. He's a tall glass of... annoying.::Tina: Well, you're gonna have to drink that glass, mister."
                    },
                    {
                        "quotes": "Teddy: I used to beat up kids like Gene in school. Not that I was a bully or anything. It's just that kids like Gene, they get beat up, you know."
                    },
                    {
                        "quotes": "Choo-Choo: You're being weird.::Gene: I think you mean antihero. Notice the hat.::Louise: That's mom's sun hat!"
                    },
                    {
                        "quotes": "Mr. Frond: Don't throw Repressed Memory Emily!::Louise: She won't remember this."
                    },
                    {
                        "quotes": "Mr. Frond: Tina here just found out that her best friend Jocelyn told Jimmy Jr. that Tina, is \"whack.\" And acting.::Jimmy Jr.: Tina, Jocelyn told me you are whack.::Tina: Jocelyn, you skank. I hate you."
                    },
                    {
                        "quotes": "Tina: [to Jocelyn] If you ever gossip about me to Jimmy Jr. outside of a conflict resolution skit, I'll punch you in the face.::Jocelyn: It was just a skit, Tina.::Tina: I will punch you. Again and again, and again and again...::Jocelyn: [as she backs out of the room] My God, what a psycho.::Tina: And again and again And again and again. [the door closes]"
                    },
                    {
                        "quotes": "Mr. Frond: [to Bob] I'd like you to take a look at my abs.::Bob: Um, no, thank you.::Louise: Show him your abs, Mr. Frond. We'd all like to see your abs.::Bob: Okay. I really don't.::Gene: And your ding-dong.::Bob: Gene."
                    },
                    {
                        "quotes": "Bob: Um, this is dumb.::Mr. Frond: Bo... Bob?::Bob: Yes?::Mr. Frond: When you say \"this is dumb,\" it makes me feel like pinching you in the eye."
                    },
                    {
                        "quotes": "Linda Belcher: Tina, you're supposed to be watching the restaurant.::Tina: I'm too upset to serve food.::Bob: W-what'd you do? Did you lock up?::Tina: Yes.::Bob: Were there customers inside?::Tina: I don't know! [Scene cuts to customers locked inside of the restaurant]"
                    },
                    {
                        "quotes": "Linda Belcher: No one's gonna come to the fundraiser now. Good job, Bobby!::Bob: It's not my fault, Lin. It was Mr. Frond's fault.::Gene: And Louise's.::Louise: And Gene's! And most of all, that stupid movie."
                    },
                    {
                        "quotes": "Bob: You're overreacting, Lin.::Linda Belcher: The hell I am! I'm in charge of a spaghetti dinner that's not gonna have any spaghetti!::Tina: If we all just worked on our abs...::Linda Belcher: Not now with that crap, Tina!"
                    },
                    {
                        "quotes": "Bob: Louise, enough. You've been stirring the pot for three days and acting like a baby. Now you owe your brother an apology for getting him in trouble.::Louise: Me? Both of you owe me an apology.::Bob: Both of us? Why? Because we wanted to watch Banjo?::Louise: Because you stopped hanging out with me.::Bob: What?::Gene: Shh. Use your slide voices.::Louise: First, the Burn Unit stopped hanging out. Then, the Lunch Bunch stopped hanging out.::Bob: God, we have lame names.::Louise: Who the hell am I gonna hang around if not you two? Mom and Tina? The Menstruation Nation?::Bob: Ugh, that's a really bad name."
                    },
                    {
                        "quotes": "Linda Belcher: [about the meatballs] Here, Colleen, why don't you put these balls in your face?"
                    },
                    {
                        "quotes": "Tina: [to Jocelyn] I warned you, skank!"
                    },
                    {
                        "trivia": "In the opening sequence of each episode, the property to the right of Bob's has a different name and in each episode of the show it is shown as being for rent."
                    },
                    {
                        "trivia": "Burger of the Day: Shoot Out at the Okra Corral Burger"
                    },
                    {
                        "trivia": "Banjo is a real spaghetti western character, he was not the hero of his own film though, but rather a morally ambiguous character in the film Sabata with Lee van Cleef. He did shoot bullets from his banjo though."
                    },
                    {
                        "plot": "The \"Burn Unit\" is suspended when Bob sees \"Banjo,\" a spaghetti western on TV. Bob asks Gene to join him and Louise; the youngest child is not amused. Tina is a member of Wagstaff School's Conflict Resolution Club, A.B.S. The club asks Bob's Burgers to provide spaghetti and meatballs for its upcoming fundraiser; and Linda is so proud. Gene can find neither a banjo nor a harmonica but Louise's pink guitar gives him confidence to thwart a bully at school. When the younger kids end up with detention and the Belchers are banned from the fund raiser, there may be no dinner for anyone in Sweetwater... unless Bob shows his A.B.S."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:27 March 2011"
                    },
                    {
                        "release dates": "Hungary:28 November 2011"
                    },
                    {
                        "release dates": "Netherlands:10 April 2014"
                    }],
                    "phonetic_code": "S1232",
                    "id": 289769,
                    "title": "Spaghetti Western and Meatballs",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Bed & Breakfast",
                "id": "4.280073",
                "label": "production",
                "props":
                {
                    "episode_nr": 7,
                    "kind": "episode",
                    "md5sum": "82d7a50826d83a583d0301a421b91155",
                    "full_info": [
                    {
                        "quotes": "Tina: Do horses get songs stuck in their heads?"
                    },
                    {
                        "quotes": "Bob: Gene, get your foot out of my underwear.::Gene: But it's so warm in there.::Bob: But it's my ass."
                    },
                    {
                        "quotes": "Linda: Louise, you're grounded! Go to your room!::Louise: That's all I ever wanted!::Linda: Not your room, my room.::Louise: You can't make me!::Linda: Oh, yes I can, little miss Missy! [Picks up Louise and puts her down in her room]::Louise: Apparently you can."
                    },
                    {
                        "quotes": "Bob: Gene, why are you in your underwear?::Gene: I was eating. What, you want me to get butter all over my clothes?"
                    },
                    {
                        "quotes": "Bob: [after Linda suggests that Teddy stays in Louise's room] Whoa, whoa, whoa, Linda, Louise's room? She'd murder us.::Linda: She's a big girl. She'll get over it.::Bob: Linda, she won't get over it. When you vacuumed in there, she wouldn't talk to you for a week."
                    },
                    {
                        "trivia": "Burger of the Day: Camembert-ly Legal Burger"
                    },
                    {
                        "plot": "With a long weekend approaching, Linda sees an opportunity to capitalize on the tourist traffic by starting a bed and breakfast. But when the reservations are filled by some shady character, Louise plants listening devices all over the house to keep an ear on what's happening."
                    },
                    {
                        "plot": "Linda turns the Belcher apartment into a Bed & Breakfast, with potpourri, 2-ply toilet paper and extra amenities, to earn money during a long holiday weekend. Linda envisions wine and cheese socials, game nights and fun mixers. But, Bob tells Linda she goes overboard as hostess and ends up resenting her guests for failing to appreciate her efforts. Louise is on board until Linda rents her room to Teddy---then it becomes full-scale, no holds barred war."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:13 March 2011"
                    },
                    {
                        "release dates": "Hungary:14 November 2011"
                    },
                    {
                        "release dates": "Netherlands:8 April 2014"
                    }],
                    "phonetic_code": "B3162",
                    "id": 289696,
                    "title": "Bed & Breakfast",
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Plenty of Fish",
                "id": "4.282975",
                "label": "production",
                "props":
                {
                    "episode_nr": 3,
                    "kind": "episode",
                    "md5sum": "213c1c857a0caeda36418ede0dd6cc5c",
                    "full_info": [
                    {
                        "goofs": "DATE: This episode's main story takes place in the summer of 1994 (00:16:28). The character named Zach refers to having Limp Bizkit on CD (00:19:54). Limp Bizkit was not founded until 1995 and did not have an album out until 1997."
                    },
                    {
                        "soundtrack": "\"Old School\" Performed by 'Hedley' (qv) Composed by Christian Crippin, 'Jacob Hoggard' (qv), Thomas Walter MacDonald, Dave Rosin Publisher: Universal Music Publishing Group Master: Geffen Records under license from Universal Music Canada"
                    },
                    {
                        "soundtrack": "\"Pump Up the Volume\" Performed by 'Marrs' (qv) (as MARRS) Written by 'Martyn Young' (qv) (as M. Young) / 'Steve Young (III)' (qv) (as S. Young) Publisher: Universal Music Publishing Group M/A/R/R/S \"Pump Up The Volume\" [GAD 2107 CD] (P) 1987 4AD Limited Taken from the album \"Best Of Colourbox 82/ 87\" by Colourbox Licensed courtesy of 4AD Ltd."
                    },
                    {
                        "soundtrack": "\"Wheat Kings\" Performed by Marco DiFelice & 'Trevor Yuile' (qv) Written by J. Fay, G. Downie, R. Baker, G. Sinclair, P. Langlois Published by Little Smoke Music/ Southern Music Pub. Co. Canada Ltd."
                    },
                    {
                        "soundtrack": "\"I'm too Sexy\" Performed by 'Trevor Yuile' (qv) & Joettes Composed by 'Richard Fairbrass' (qv), 'Fred Fairbrass' (qv), 'Rob Manzoli' (qv) Publisher: Spirit One Music o/b/o ITS Music Publishing BV."
                    },
                    {
                        "soundtrack": "\"Two Princes\" Performed by 'Spin Doctors' (qv) (as Spin Doctors) Composed by Corness / White / Schenkman / Gross Published by Sony/ATV Songs LLC (BMI) / Sony/ATV Music Publishing Canada (SOCAN) Master: Courtesy of Sony BMG All rights reserved. Used by permission."
                    },
                    {
                        "soundtrack": "\"Girl With A Problem\" Performed by 'The Northern Pikes' (qv) Composed by 'Jay Semko' (qv), 'Bryan Potvin' (qv), Don Schmid, Merl Bryck Publisher: Northern Pike Songs (SOCAN) Master: Courtesy of Virgin Music Canada/EMI Music Canada"
                    },
                    {
                        "soundtrack": "\"Every Little Thing\" Written and performed by 'Melanie Doane' (qv) Master Recording and Publishing courtesy of Prairie Ocean Inc."
                    },
                    {
                        "soundtrack": "\"Old School\" Written by Christian Crippin, 'Jacob Hoggard' (qv), Thomas Walter MacDonald, Dave Rosin Performed by 'Hedley' (qv)"
                    },
                    {
                        "soundtrack": "\"Pump Up the Volume\" Written by Martin Young, Steve Young Performed by MARRS"
                    },
                    {
                        "soundtrack": "\"Wheat Kings\" Written by J. Fay, G. Downie, R. Baker, G. Sinclair, P. Langlois Performed by Marco DiFelice & 'Trevor Yuile' (qv)"
                    },
                    {
                        "soundtrack": "\"I'm Too Sexy\" Written by 'Richard Fairbrass' (qv), 'Fred Fairbrass' (qv), 'Rob Manzoli' (qv) Performed by 'Trevor Yuile' (qv) & Joettes"
                    },
                    {
                        "soundtrack": "\"Two Princes\" Written by 'Aaron Comess' (qv), 'Eric Schenkman' (qv), 'Mark White (IX)' (qv), 'Chris Barron (III)' (qv) (as Gross) Performed by 'Spin Doctors' (qv)"
                    },
                    {
                        "soundtrack": "\"Girl With a Problem\" Written by 'Jay Semko' (qv), 'Bryan Potvin' (qv), Don Schmid, Merl Bryck Performed by 'The Northern Pikes' (qv)"
                    },
                    {
                        "soundtrack": "\"Every Little Thing\" Written by 'Melanie Doane' (qv) Performed by 'Melanie Doane' (qv)"
                    },
                    {
                        "copyright holder": "© Session Productions Limited 2009"
                    },
                    {
                        "plot": "Erica, feeling like a failure since high school, decides to ask Ethan, who is going through a divorce and recently moved back to Toronto, to escort her as her make believe boyfriend to her high school reunion. There are two people who Erica is not looking forward to seeing at the reunion. One is Katie, who has always gotten under Erica's skin. But the more important one is Zach Creed, the popular kid to whom she lost her virginity. Beyond the fact that the sex with Zach was bad, he humiliated her after the fact. Erica feels that experience with Zach has negatively tainted the way she now views potential boyfriends. Dr. Tom gives her the opportunity to redo that experience with Zach. But based on what she sees at the reunion, the one person that Erica may instead want to lose her virginity to the second time around is Alex Berlin, who was then the quiet class geek. Her time with Alex both then and now makes her realize who is really important in her life."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "42"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "CAM:Panavision Cameras and Lenses"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:19 January 2009"
                    },
                    {
                        "release dates": "Netherlands:21 April 2009"
                    },
                    {
                        "release dates": "Australia:11 September 2009"
                    },
                    {
                        "release dates": "Hungary:11 October 2009"
                    },
                    {
                        "release dates": "Japan:31 July 2010"
                    },
                    {
                        "release dates": "Germany:20 January 2011"
                    }],
                    "phonetic_code": "P4531",
                    "id": 241689,
                    "title": "Plenty of Fish",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Sexy Dance Fighting",
                "id": "4.294723",
                "label": "production",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "baa5a8a135afe9ab564e90e33cb6b0a0",
                    "full_info": [
                    {
                        "quotes": "Bob: Tina, if you're going to lie on the floor, at least roll over so I don't have to mop up spills.::Gene: What's wrong with Tina?::Linda: Puberty.::Louise: Yeah, she's pubing out real bad."
                    },
                    {
                        "quotes": "Louise: They take off their shoes, so when they open the door, the whole place smells like feet.::Gene: Feet that have been boiled in feet."
                    },
                    {
                        "quotes": "Gene: They're bringing back the tambourine.::Tina: It's a pandero. It's a Brazilian instrument.::Gene: That's a tambourine. I'm getting mine. These guys don't know how to shake it."
                    },
                    {
                        "quotes": "Linda: Ginger's cat died, but in a very funny way."
                    },
                    {
                        "quotes": "Linda: Listen, your father is very tender right now, so whatever you do, don't mention what happened yesterday.::[Bob walks in]::Linda: So you pooped your pants!"
                    },
                    {
                        "quotes": "Bob: I can't go because I have to take care of the restaurant. You don't abandon the restaurant for some fancy dancing::Tina: If I were a hamburger you'd come and watch!::Linda: See what you've done, Bob? Come on, kids. Let's go to Tina's karate concert."
                    },
                    {
                        "quotes": "Louise: So you won't be going to revenge then?::Bob: No.::Louise: Then I guess you won't be needing your credit card, which I have carved into a ninja star.::Bob: Wait, you carved my credit card?::Louise: Into a ninja star!"
                    },
                    {
                        "quotes": "Louise: What is your problem with fire?"
                    },
                    {
                        "trivia": "Burger of the Day: Fig-eta Bout It Burger, The Roquefort Files Burger, These Collards Don't Run Burger."
                    },
                    {
                        "plot": "Tina is going through the heartbreak of puberty; once they see it is not contagious, Gene and Louise try to cheer up their big sister. They show her what they believe is a smelly special needs breakdancing class in Brazilian. Tina's hormones are fueled by lithe, muscular Jairo and his martial art, Capoeira. Soon, it is \"Jairo says this\" and \"Jairo says that\" and Tina is neglecting her job, working night and day, to master Capoeira. Tina wants to earn her yellow corda in the Troca de Cordões ceremony, Portuguese for \"exchange of strands.\" Teddy equates it with becoming a woman; Bob is having a much harder time letting go of his little girl than he is of his 4:30 appointments. However, when poop comes to slap, the Belchers fight it out...together."
                    },
                    {
                        "plot": "Tina quickly becomes infatuated with her new dance instructor, and begins to seriously neglect her restaurant responsibilities. In order to rescue his daughter, Bob has to face his fear of failure and long-established 4:30 pm poop schedule."
                    },
                    {
                        "plot": "When Tina develops a crush on the new martial arts instructor in town, she joins the class and ends up shirking her responsibilities at the restaurant. Bob finds out what's going on and decides to take matters into his own hands."
                    },
                    {
                        "certificates": "Netherlands:AL"
                    },
                    {
                        "certificates": "New Zealand:PG"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "UK:8 February 2011"
                    },
                    {
                        "release dates": "USA:13 February 2011"
                    },
                    {
                        "release dates": "Australia:16 February 2011"
                    },
                    {
                        "release dates": "Hungary:24 October 2011"
                    },
                    {
                        "release dates": "Netherlands:3 April 2014"
                    }],
                    "phonetic_code": "S2352",
                    "id": 289764,
                    "title": "Sexy Dance Fighting",
                    "cast_and_crew_info": [
                    {
                        "cast": "complete"
                    },
                    {
                        "crew": "complete"
                    }],
                    "season_nr": 1,
                    "production_year": 2011
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "(#1.8)",
                "id": "4.294868",
                "label": "production",
                "props":
                {
                    "episode_nr": 8,
                    "kind": "episode",
                    "md5sum": "cb04d6e7034bdf0a08095e2f9be6cc96",
                    "full_info": [
                    {
                        "plot": "Contract cleaner Vanessa is clearing out a building, helped by Nigerian Zara, who speaks no English. Despite the language barrier Vanessa deduces that Zara is being sexually abused by Jonjo, who runs the hostel where she and other girls , all illegal immigrants, live but knows that if she tells the police Zara will be deported. They find a wad of money and Vanessa tells Zara to travel to a friend in London with it but when Jonjo returns with the other girls she devises another plan to rectify matters."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:12 March 2015"
                    },
                    {
                        "release dates": "Netherlands:30 July 2015"
                    }],
                    "id": 215880,
                    "title": "(#1.8)",
                    "season_nr": 1,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Leo",
                "id": "4.295462",
                "label": "production",
                "props":
                {
                    "episode_nr": 13,
                    "kind": "episode",
                    "md5sum": "984380c7e9888eafeac37e21efc9428a",
                    "full_info": [
                    {
                        "soundtrack": "\"I Will Remember You\" Written by 'Sarah McLachlan (I)' (qv), 'Seamus Egan' (qv), 'Dave Merenda' (qv) (as David Merenda) Performed by 'Sarah McLachlan (I)' (qv)"
                    },
                    {
                        "soundtrack": "\"Elvis\" Written by Marco DiFelice, Michael Palermo Performed by Super Garage"
                    },
                    {
                        "trivia": "In this episode, Gary (Erica's father) wears a shirt with a drawing of the Vulcan salute and the Vulcan greeting \"Live Long and Prosper\" on it. This has a double meaning. Presumably, it means that Gary is a fan of the television series \"Star Trek\" and its spin-off series and movies. But it is also a reference to Gary's profession; Gary is a rabbi, and the Vulcan gesture was created by Spock actor 'Leonard Nimoy' (qv), who took the hand motion from a ritual gesture that is a traditional part of a Jewish prayer called the Birkat Kohanim. Nimoy, the son of Orthodox Jewish immigrants from the Ukraine, grew up seeing the gesture performed by his rabbis during synagogue services."
                    },
                    {
                        "plot": "Erica's life is finally going great, both personally and professionally. But the fact that December 13th is approaching is weighing heavily on her mind, that date being the anniversary of Leo's death, which is still her biggest regret in life. Leo died at the age of 21 in a barn fire at her grandmother's farm, the fire that appears to be an accident of Leo's own doing. The farm is now the unofficial grave site where the family visits only once a year to mourn. Erica wants things to change, to make Leo's memory more of a happy thought than a somber one. Her idea is to rebuild the barn as both a cathartic exercise and a standing memorial to Leo. This task ends up being difficult for Barb, who cannot let go of how she grieves for her son. Before sending Erica back to that time to allow her to say goodbye to her brother, Dr. Tom stresses to her that her therapy does not allow her to play God to bring back the dead, and that there are dire consequences if she tries to do so. Once back, Erica finds that knowing her brother is going to die and not doing anything about it is more difficult than she could have ever imagined. Erica learns the hard way that there are extreme consequences in every aspect of her life to her decision to try and save Leo."
                    },
                    {
                        "certificates": "Netherlands:12"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "Canada"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Toronto, Ontario, Canada"
                    },
                    {
                        "runtimes": "45"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "LAB:Technicolor"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    },
                    {
                        "release dates": "Canada:1 April 2009"
                    },
                    {
                        "release dates": "Netherlands:June 2009"
                    },
                    {
                        "release dates": "Netherlands:27 October 2009"
                    },
                    {
                        "release dates": "Australia:20 November 2009"
                    },
                    {
                        "release dates": "Hungary:29 November 2009"
                    },
                    {
                        "release dates": "Japan:9 October 2010"
                    },
                    {
                        "release dates": "Germany:3 April 2011"
                    }],
                    "phonetic_code": "L",
                    "id": 241681,
                    "title": "Leo",
                    "season_nr": 1,
                    "production_year": 2009
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Belchies",
                "id": "4.296294",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "2ab09ff3d78873a2b24bd0848f52212c",
                    "full_info": [
                    {
                        "goofs": "CONT: After Teddy draws the butt, his plate and glass disappear from in front of him."
                    },
                    {
                        "quotes": "Tina: Dear Diary: Tonight I'm sneaking off to the abandoned taffy factory to look for treasure. Also, if boys had uteruses, they'd be called duderuses."
                    },
                    {
                        "quotes": "[Bob and Linda are using sex dice]::Bob: Ugh, I got lick foot again."
                    },
                    {
                        "quotes": "Ollie: I peed Andy's pants.::Andy: Warm, warm, warm, cold."
                    },
                    {
                        "quotes": "Teddy: Are you coming to my party tonight? I'm making a three-bean salad, but it's bring your own bean. Can I put you down for garbanzo?"
                    },
                    {
                        "quotes": "Gene: [licking machinery in the taffy factory] I can taste all the flavors from the past sixty years. I can taste the Korean War.::Andy: I taste rust.::Ollie: I taste Andy's spit."
                    },
                    {
                        "quotes": "Gene: Look what we found with our metal detector. Another metal detector!"
                    },
                    {
                        "quotes": "Ollie: I got a funcussion."
                    },
                    {
                        "quotes": "Tina: Brr, it sure is cold in here. I wish some strong, chivalrous man would lend me his jacket, or his pants.::[Gene throws his pants on Tina's head]::Tina: Ow.::Gene: Wash 'em before you return 'em."
                    },
                    {
                        "quotes": "Louise: All right, I need one of you in front of me and one of you behind me at all times in case there are booby traps.::Ollie, Andy: Booby, booby, booby, booby...::Louise: Shh! Zip it! Zip it!"
                    },
                    {
                        "quotes": "Bob: Wait a minute, why is this still here?::Linda: Well, I may have slipped a penis pill in your casserole. Surprise!::Bob: What? Why?::Linda: Sometimes you want to ride the rollercoaster one more time and you don't want to wait in line.::Bob: Where did you get it?::Linda: Ginger. She does it to Tony all the time. I wanted to be edgy like them. Pill-popping sex freaks."
                    },
                    {
                        "quotes": "Linda: Is your penis all right?::Bob: It's fine.::Gene: Mine's a nightmare, if anyone's wondering."
                    },
                    {
                        "quotes": "Gene: China. Stick to noodles, am I right? Was that racist?::Bob: Yes.::Teddy: Little bit.::Gene: Nah!"
                    },
                    {
                        "quotes": "Louise: [to Gene, who is crawling on the ground] Gene, you don't have to do that. They locked the door.::Gene: I know. My belly itches."
                    },
                    {
                        "quotes": "Louise: You two are useless, between you inviting half the town and you pushing and licking everything in sight like an animal!"
                    },
                    {
                        "quotes": "Bob: I don't hear Louise! Where's Louise?::Gene: She ditched us, and then she ditched us some more!::Tina: The second time hurt the most."
                    },
                    {
                        "quotes": "Bob: Louise, are you sure there isn't something down there you can use to climb out?::Louise: [sarcastically] Oh, wait! Here's a grappling hook! Oh, and here's an escalator! Silly me!::Bob: We're about to die, Louise! Do you really want your final words to be sarcastic?::Louise: [sarcastically] NoooooOOOOOOoooooo!"
                    },
                    {
                        "soundtrack": "\"Taffy Butt\" Performed by 'Cyndi Lauper' (qv)"
                    },
                    {
                        "trivia": "Burger of the Day: I Am Mad About Saffron (Made with no saffron)"
                    },
                    {
                        "trivia": "Louise (Kristen Schaal) makes a sarcastic comment about having a grappling hook. A month later, in the first episode of Gravity Falls (2012), Schaal's character, Mabel, gets a grappling hook. She continues to use it sporadically throughout the series."
                    },
                    {
                        "trivia": "Cindy Lauper performs the song \"Taffy Butt\" at the end of the episode to the tune of \"Goonies R Good Enough.\""
                    },
                    {
                        "plot": "The city is tearing down old Caffrey's Taffy Factory; it generates a lot of buzz. Zeke and Jimmy Jr. plan to be there, practicing wrestling moves, so Tina will be nearby. Teddy talks about his Uncle Paddy; he worked for Caffrey, who ran liquor during Prohibition and did not trust banks or greenbacks. Teddy draws a map shaped like a butt with 3 droppings; this is the supposed location of an elevator leading to tunnels. Teddy regales the kids with secret caves, G-Men, treasure, trip wires and taffy dummies. Treasure is a serious matter for Louise so she, Blabbermouth, Gene, Jimmy Jr., Zeke, Andy and Ollie explore the factory. Louise is really angry at Tina for inviting \"dead weight.\" As Linda and Bob roll the dice, Louise finds the hidden elevator and with new friend, Taff, she goes for the gold. He ain't heavy, he's her dummy."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Dolby"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "Canada:11 March 2012"
                    },
                    {
                        "release dates": "USA:11 March 2012"
                    },
                    {
                        "release dates": "UK:1 May 2012"
                    },
                    {
                        "release dates": "Netherlands:17 April 2014"
                    },
                    {
                        "release dates": "Hungary:27 May 2014"
                    }],
                    "phonetic_code": "B42",
                    "id": 289774,
                    "title": "The Belchies",
                    "season_nr": 2,
                    "production_year": 2012
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Boys Will Be Girls",
                "id": "4.303272",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "aadcde098dc70ee7b3f76dd704c6ce7a",
                    "full_info": [
                    {
                        "certificates": "Australia:PG"
                    },
                    {
                        "certificates": "Norway:A"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    }],
                    "phonetic_code": "B2412",
                    "id": 303100,
                    "series_years": "2006-????",
                    "title": "Boys Will Be Girls",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Pontiac Bandit",
                "id": "4.306811",
                "label": "production",
                "props":
                {
                    "episode_nr": 12,
                    "kind": "episode",
                    "md5sum": "80f6ecae3724e75acd27394f9222c5ad",
                    "full_info": [
                    {
                        "soundtrack": "\"Mama Said Knock You Out\" (uncredited) Written by 'LL Cool J' (qv) Performed by 'LL Cool J' (qv)"
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Jake is interested in one of Rosa's perps, Doug Judy (Guest Star Craig Robinson, \"The Office\"), who has information about the \"Pontiac Bandit,\" a car thief whom Jake has been tracking for years. Meanwhile, the station tries to accommodate a scooter-bound Charles' every need when he returns to work, but he proves to be too much to handle. And Captain Holt struggles to find a home for two puppies."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:7 January 2014"
                    },
                    {
                        "release dates": "UK:3 April 2014"
                    },
                    {
                        "release dates": "Hungary:9 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "P5321",
                    "id": 315958,
                    "title": "Pontiac Bandit",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Party",
                "id": "4.310711",
                "label": "production",
                "props":
                {
                    "episode_nr": 16,
                    "kind": "episode",
                    "md5sum": "2a9669ba30a30d0fc01d03ff08ae3cff",
                    "full_info": [
                    {
                        "soundtrack": "\"Una furtiva lagrima\" (uncredited) Written by 'Gaetano Donizetti' (qv) Performed by 'Joel McKinnon Miller' (qv)"
                    },
                    {
                        "soundtrack": "\"'O sole mio\" (uncredited) Music by 'Eduardo Di Capua' (qv) Lyrics by 'Giovanni Capurro' (qv) Performed by 'Joel McKinnon Miller' (qv)"
                    },
                    {
                        "trivia": "The Terry's painting of Holt from {M.E. Time (#1.04)} can be seen hanging in Kevin's office."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:4 February 2014"
                    },
                    {
                        "release dates": "UK:1 May 2014"
                    },
                    {
                        "release dates": "Hungary:23 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "P63",
                    "id": 315982,
                    "title": "The Party",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Halloween",
                "id": "4.314971",
                "label": "production",
                "props":
                {
                    "episode_nr": 6,
                    "kind": "episode",
                    "md5sum": "d73e278c10eb1c6cdfc69ecabac2aa8b",
                    "full_info": [
                    {
                        "trivia": "This episode takes place on October 31, 2013."
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLV. All Rights Reserved."
                    },
                    {
                        "plot": "It's Halloween night, a busy time of the year for any police precinct. Amy detests the holiday, and is not thrilled when she has to don a costume to go undercover on street patrol with Charles. Back at the precinct, Jake bets Captain Holt that he can steal his Medal of Valor before midnight, which results in him bringing out some costumes of his own."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:22 October 2013"
                    },
                    {
                        "release dates": "UK:20 February 2014"
                    },
                    {
                        "release dates": "Hungary:18 April 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "H45",
                    "id": 315937,
                    "title": "Halloween",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Fancy Brudgom",
                "id": "4.320851",
                "label": "production",
                "props":
                {
                    "episode_nr": 20,
                    "kind": "episode",
                    "md5sum": "e7f9b7eed8e8e0442b1a4b356e385c28",
                    "full_info": [
                    {
                        "goofs": "CHAR: SPOILER: In 'Thanksgiving\", Sgt. Jeffords claims that he needs to consume 10,000 calories a day just to maintain his mass. It seems unlikely that he'd be interested in such a low calorie diet in this episode."
                    },
                    {
                        "quotes": "Detective Charles Boyle: Hello, my big, beautiful B.M.::Detective Jake Peralta: Best man. Just best man is fine."
                    },
                    {
                        "soundtrack": "\"Fame\" (uncredited) Written by 'Michael Gore (I)' (qv) and 'Dean Pitchford' (qv) Performed by 'Chelsea Peretti' (qv)"
                    },
                    {
                        "soundtrack": "\"Bossa de Casa\" Written and performed by 'Ed Hartman' (qv)"
                    },
                    {
                        "trivia": "The magazine has no Danish language except the word \"Brudgom\""
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Charles asks Jake to be the best man at his wedding, a role that requires Jake to be supportive in important wedding decisions, ranging from cake tasting to floral arrangements. Meanwhile, Terry, Amy and Gina support each other as they start a new extreme diet and Holt helps Rosa make a sincere apology."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:11 March 2014"
                    },
                    {
                        "release dates": "UK:29 May 2014"
                    },
                    {
                        "release dates": "Hungary:6 June 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "F5216",
                    "id": 315934,
                    "title": "Fancy Brudgom",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Bet",
                "id": "4.324626",
                "label": "production",
                "props":
                {
                    "episode_nr": 13,
                    "kind": "episode",
                    "md5sum": "5dbb83e63905a363fe4e8dba5577dff2",
                    "full_info": [
                    {
                        "soundtrack": "\"Celebration\" (uncredited) Written by 'Eumir Deodato' (qv), 'Robert Kool Bell' (qv), 'Ronald Bell (I)' (qv), 'George Funky Brown' (qv), 'Robert Spike Mickens' (qv), 'Claydes Smith' (qv), 'J.T. Taylor (I)' (qv), 'Dennis D.T. Thomas' (qv) and 'Earl Toon (I)' (qv) Performed by 'Kool & The Gang' (qv)"
                    },
                    {
                        "soundtrack": "\"Rock You Like a Hurricane\" (uncredited) Written by 'Herman Rarebell' (qv), 'Klaus Meine' (qv) and 'Rudolf Schenker' (qv) Performed by , , 'Herman Rarebell' (qv) and 'Scorpions' (qv)"
                    },
                    {
                        "trivia": "In this episode, \"Detective Charles Boyle\" refers to the famous actor Neil Patrick Harris in conversation, stating his \"showmanship is his superpower\". The actor who portrays Boyle, Joe Lo Truglio, previously appeared in a brief role in How I Met Your Mother, in which Neil Patrick Harris was one of the main characters. He played Marshall (one of Barney (NPH)'s friend)'s boss."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Jake and Amy's ongoing bet about who can make more arrests comes to a close. Meanwhile, Charles receives the Medal of Valor for getting shot in the line of duty, but the pain medication he is taking causes him to reveal his true opinions about his colleagues."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:14 January 2014"
                    },
                    {
                        "release dates": "UK:10 April 2014"
                    },
                    {
                        "release dates": "Hungary:16 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "B3",
                    "id": 315969,
                    "title": "The Bet",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Brothers & Sisters",
                "id": "4.326179",
                "label": "production",
                "props":
                {
                    "alternate_titles": [
                    {
                        "note": "(USA) (DVD title)",
                        "kind": "tv series",
                        "md5sum": "e7b02aa94b13a5834f04787d0f9ad19e",
                        "aka_title": "Brothers and Sisters",
                        "phonetic_code": "B6362",
                        "production_year": 2006
                    },
                    {
                        "kind": "tv series",
                        "md5sum": "4fadd1870acac0da39a02a092544a5d7",
                        "aka_title": "Brothers & Sisters",
                        "phonetic_code": "B6362",
                        "production_year": 2006
                    }],
                    "kind": "tv series",
                    "md5sum": "4fadd1870acac0da39a02a092544a5d7",
                    "full_info": [
                    {
                        "soundtrack": "\"Smashing Bottles\" Produced and Written by 'Louie Rubio' (qv) & 'Alex Shultz (III)' (qv)"
                    },
                    {
                        "trivia": "'Tom Skerritt' (qv) and 'Sally Field' (qv) have played a married couple before, in _Steel Magnolias (1989)_ (qv). They played roles of 'Julia Roberts (I)' (qv)'s parents."
                    },
                    {
                        "trivia": "'Rachel Griffiths (I)' (qv) (Sarah) and 'Matthew Rhys' (qv) (Kevin) have appeared together in _Very Annie Mary (2001)_ (qv) a TV movie."
                    },
                    {
                        "trivia": "Robert McCallister was the name of a character on a previous 'Greg Berlanti' (qv) show, _\"Jack & Bobby\" (2004)_ (qv) about a boy that grew up to be the President of the United States. As with Brothers & Sisters, he had a wife named Courtney and a son called Jack."
                    },
                    {
                        "trivia": "The Walker siblings' birth order is: Sarah ('Rachel Griffiths (I)' (qv)), Kitty ('Calista Flockhart' (qv)), Tommy ('Balthazar Getty' (qv)), Kevin ('Matthew Rhys' (qv)), and Justin ('Dave Annable' (qv))."
                    },
                    {
                        "trivia": "While the producers were looking for an actor to play the role of Jason McCallister (Robert McCallister's brother and Kevin Walker's love interest), 'Rob Lowe (I)' (qv), who plays Robert McCallister, recommended 'John Barrowman' (qv), who had costarred with Lowe in \"A Few Good Men\" on the London stage. The producers offered the role to Barrowman, and he was interested in taking it, but was ultimately unable to work the shooting schedule around the schedule for his own show, _\"Torchwood\" (2006)_ (qv)."
                    },
                    {
                        "trivia": "Unusually for a show that turned out to be a critical and commercial hit, in the weeks before the first episode aired, this show went through several cast and crew changes. The Walker family matriarch, Iva, played by 'Betty Buckley (I)' (qv) in the original pilot, was recast with 'Sally Field' (qv) and renamed Nora. Walker brother Bryan, played by 'Jonathan LaPaglia' (qv), was recast with 'Matthew Rhys' (qv), renamed Kevin, and given a new back story (instead of Bryan being an ex-husband and father who was newly out of the closet, Kevin was a never-married lawyer who was more comfortable with his homosexuality). 'Marti Noxon' (qv) was replaced as the showrunner by 'Greg Berlanti' (qv) because of \"creative differences.\""
                    },
                    {
                        "trivia": "'Jeff Bridges (I)' (qv) was asked to play the part of Sally Field's husband, but turned it down. Jeff's brother Beau was later cast as Sarah's biological father for the last five episodes of the series."
                    },
                    {
                        "trivia": "Tommy Walker and Nora Walker are the names of two of the main characters in 'The Who' (qv)'s rock opera \"Tommy\"."
                    },
                    {
                        "trivia": "If the birth-dates of the actors who play the Walker siblings were applied, the birth order of the Walker clan would be: Kitty, Sarah, Kevin, Tommy, and Justin."
                    },
                    {
                        "trivia": "Balthazar Getty and Sarah Jane Morris departed as series regulars at the end of Season 3 due to Getty's contract not being renewed. However,they would both make guest appearances in seasons 4 and 5."
                    },
                    {
                        "trivia": "Emily Vancamp departed the series early in season 5 due to her decision not to renew her contract."
                    },
                    {
                        "trivia": "Luke Grimes' character Ryan Lafferty was originally introduced as the Walkers half youngest brother in Season 3. However, midway through the 4th Season his character was written out due to the character not fitting into the dynamic of the show."
                    },
                    {
                        "trivia": "Ron Rifkin, Patricia Wettig and Balthazar Getty co-starred in the tv series 'Alias'"
                    },
                    {
                        "trivia": "SPOILER: Rob Lowe's character dies in the show because Lowe decided to leave the show."
                    },
                    {
                        "trivia": "Sally Field and Matthew Rhys are the only actors to appear in every episode of the series."
                    },
                    {
                        "trivia": "This show is the similar to _\"Falcon Crest\" (1981)_ (qv)."
                    },
                    {
                        "copyright holder": "Disney Enterprises, Inc. © COPYRIGHT MCMXCI, MMI DISNEY ENTERPRISES, INC. All Rights Reserved"
                    },
                    {
                        "printed media reviews": "Goldblatt, Henry. \"Oh 'Brother' (C+)\". In: \"Entertainment Weekly\" (USA), Vol. 906, 10 November 2006, Pg. 67-68, (MG)"
                    },
                    {
                        "essays": "Keck, William. \"A Wedding Finale?\". In: \"TV Guide\" (USA), Iss. V 59, N 14, 4 April 2011, Pg. 16, (MG)"
                    },
                    {
                        "essays": "Rice, Lynette. \"Fall TV Preview: Brothers & Sisters\". In: \"Entertainment Weekly\" (USA), Vol. 895, 8 September 2006, Pg. 50-52, (MG)"
                    },
                    {
                        "production process protocol": "Gazan, Ali. \"Family Affair\". In: \"TV Guide\" (USA), Vol. 55, Iss. 7, 12 February 2007, Pg. 34-36, (MG)"
                    },
                    {
                        "production process protocol": "Hochman, David. \"Behind the B&S Shake-up\". In: \"TV Guide\" (USA), Vol. 56, Iss. 2, 14 January 2008, Pg. 13, (MG)"
                    },
                    {
                        "production process protocol": "Walsh-Boyle, Megan. \"Oh, Brothers, Where Art Thou?\". In: \"TV Guide\" (USA), Vol. 57, Iss. 18, 4 May 2009, Pg. 58, (MG)"
                    },
                    {
                        "production process protocol": "staff. \"Brothers & Sisters New Arrival\". In: \"TV Guide\" (USA), Vol. 56, Iss. 39, 29 September 2008, Pg. 18, (MG)"
                    },
                    {
                        "certificates": "Argentina:16"
                    },
                    {
                        "certificates": "Australia:M"
                    },
                    {
                        "certificates": "Australia:PG"
                    },
                    {
                        "certificates": "Brazil:10"
                    },
                    {
                        "certificates": "Brazil:12"
                    },
                    {
                        "certificates": "Brazil:14"
                    },
                    {
                        "certificates": "Canada:PG"
                    },
                    {
                        "certificates": "Canada:14A"
                    },
                    {
                        "certificates": "Germany:12"
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "New Zealand:M"
                    },
                    {
                        "certificates": "Singapore:M18"
                    },
                    {
                        "certificates": "South Korea:15"
                    },
                    {
                        "certificates": "UK:U"
                    },
                    {
                        "certificates": "UK:PG"
                    },
                    {
                        "certificates": "UK:12"
                    },
                    {
                        "certificates": "USA:TV-PG"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "genres": "Drama"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "1640 Lombardy Road, Pasadena, California, USA"
                    },
                    {
                        "locations": "635 South Mateo Street, Los Angeles, California, USA"
                    },
                    {
                        "locations": "Walt Disney Studios, 500 South Buena Vista Street, Burbank, California, USA"
                    },
                    {
                        "runtimes": "USA:60"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "OFM:35 mm"
                    },
                    {
                        "tech info": "PCS:Super 35"
                    },
                    {
                        "tech info": "PFM:Video"
                    },
                    {
                        "tech info": "RAT:1.78 : 1"
                    }],
                    "phonetic_code": "B6362",
                    "id": 319290,
                    "series_years": "2006-2011",
                    "title": "Brothers & Sisters",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Cardinal Burns",
                "id": "4.326688",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "2d0b532da74711b110397e60ee7bfd57",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Comedy"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "release dates": "UK:8 May 2012"
                    }],
                    "phonetic_code": "C6354",
                    "id": 358862,
                    "series_years": "2012-????",
                    "title": "Cardinal Burns",
                    "production_year": 2012
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "California Dreaming",
                "id": "4.328293",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "56f57ab046fc02f01ee08e50d4057ef4",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "Beverly Hills, California, USA"
                    },
                    {
                        "locations": "Hollywood, Los Angeles, California, USA"
                    },
                    {
                        "locations": "Los Angeles, California, USA"
                    },
                    {
                        "locations": "Venice, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:5 June 2005"
                    }],
                    "phonetic_code": "C4165",
                    "id": 342881,
                    "series_years": "2005-????",
                    "title": "California Dreaming",
                    "production_year": 2005
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Chantelle's Dream Dates",
                "id": "4.330082",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "debfbf4a0b8416d9d732794132b86a23",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "genres": "Reality-TV"
                    },
                    {
                        "genres": "Romance"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "UK:30"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:2006"
                    }],
                    "phonetic_code": "C5342",
                    "id": 388546,
                    "series_years": "2006-????",
                    "title": "Chantelle's Dream Dates",
                    "production_year": 2006
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Apartment",
                "id": "4.331464",
                "label": "production",
                "props":
                {
                    "episode_nr": 18,
                    "kind": "episode",
                    "md5sum": "cdf85d743e0af04cf1647092a43f43a9",
                    "full_info": [
                    {
                        "goofs": "CONT: Holt's bowl of has a soup stain near the rim before he starts to sip it."
                    },
                    {
                        "trivia": "In this episode it is revealed that Gina and Jake grew up together. In real life the actors portraying them, Chelsea Peretti and Andy Samberg, did in fact grow up together. Chelsea revealed on an interview with Conan O'Brien that she had a crush on Andy growing up and would regularly call his house and hang up."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Jake's crushing debt finally catches up with him, and he is in danger of losing his apartment, unless Gina can find a way to bail him out. Holt and Terry hold performance reviews for the entire precinct, and Rosa and Charles have a run-in with one of the weekend squad officers."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:25 February 2014"
                    },
                    {
                        "release dates": "UK:15 May 2014"
                    },
                    {
                        "release dates": "Hungary:30 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "A1635",
                    "id": 315968,
                    "title": "The Apartment",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Can You Pull...?",
                "id": "4.335795",
                "label": "production",
                "props":
                {
                    "kind": "tv series",
                    "md5sum": "9e93cf1bc9740389d06333cb03c77a23",
                    "full_info": [
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "UK"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "UK:30"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "release dates": "UK:25 August 2004"
                    }],
                    "phonetic_code": "C514",
                    "id": 351541,
                    "series_years": "2004-????",
                    "title": "Can You Pull...?",
                    "production_year": 2004
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Ebony Falcon",
                "id": "4.337718",
                "label": "production",
                "props":
                {
                    "episode_nr": 14,
                    "kind": "episode",
                    "md5sum": "5cb8e6ebb65a8ff8645b84602b441178",
                    "full_info": [
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:21 January 2014"
                    },
                    {
                        "release dates": "UK:17 April 2014"
                    },
                    {
                        "release dates": "Hungary:16 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "E1514",
                    "id": 315972,
                    "title": "The Ebony Falcon",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "New Captain",
                "id": "4.342729",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "a79d1cb4d4558e5098db9a707f0dc4d3",
                    "full_info": [
                    {
                        "quotes": "Captain Ray Holt: This is how it ends, with me standing on the urine-soaked floor of an elementary school bathroom in a third-rate bird costume."
                    },
                    {
                        "trivia": "SPOILER: Bill Hader was selected to play the role of the new precinct captain."
                    },
                    {
                        "trivia": "SPOILER: Bill Hader and Andy Samberg previously worked together on the comedy sketch show Saturday Night Live."
                    },
                    {
                        "copyright holder": "Copyright © 2015 Universal Televisoin LLC. All Rights Reserved."
                    },
                    {
                        "plot": "After Holt is transferred to the NYPD Department of Public Relations, the new captain's arrival causes the precinct to dissolve into chaos, despite Terry's best efforts to keep everyone on point. Meanwhile, Jake and Amy face the aftermath of their \"for reals\" kiss."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "30"
                    },
                    {
                        "sound mix": "Dolby Digital"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:27 September 2015"
                    },
                    {
                        "release dates": "UK:7 January 2016"
                    }],
                    "phonetic_code": "N2135",
                    "id": 315952,
                    "title": "New Captain",
                    "season_nr": 3,
                    "production_year": 2015
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Operation: Broken Feather",
                "id": "4.343046",
                "label": "production",
                "props":
                {
                    "episode_nr": 15,
                    "kind": "episode",
                    "md5sum": "1cebefc5daddf6b7021cbc63565d89d7",
                    "full_info": [
                    {
                        "soundtrack": "\"You're the Best\" (uncredited) Written by 'Bill Conti' (qv) and 'Allee Willis (I)' (qv) Performed by 'Joe Esposito (III)' (qv)"
                    },
                    {
                        "soundtrack": "\"I Got You Babe\" (uncredited) Written by 'Sonny Bono' (qv) Performed by 'Sonny Bono' (qv) and 'Cher (I)' (qv)"
                    },
                    {
                        "trivia": "The music played during the football game at the beginning of this episode is from the tournament fighting scene of the movie \"Karate Kid\" (\"You are the best\" by Bill Conti)."
                    },
                    {
                        "trivia": "Former NFL quarterback Joe Theisman appears as a bidder at an auction Peralta (Samberg) and Santiago (Funeral) are investigating, while looking for a perpetrator. As Peralta tackles their perp, he also tackles Joe Theisman who \"breaks\" his \"other leg.\" Theisman, in real life, was forced to retire from football after his leg was broken during a football game. This is one of the most famous, yet gruesome, football injuries of all time."
                    },
                    {
                        "trivia": "Adam Sandler appears as himself during the show. Sandler and Samberg have worked on other projects together in the past."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Jake and Amy investigate a string of hotel robberies together, but Jake turns on her when he finds out she may leave the Nine-Nine to work in the Major Crimes unit with The Vulture. Meanwhile, Captain Holt and Terry strategize to make the precinct more efficient."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:2 February 2014"
                    },
                    {
                        "release dates": "UK:24 April 2014"
                    },
                    {
                        "release dates": "Hungary:23 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "O1635",
                    "id": 315954,
                    "title": "Operation: Broken Feather",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Unsolvable",
                "id": "4.352345",
                "label": "production",
                "props":
                {
                    "episode_nr": 21,
                    "kind": "episode",
                    "md5sum": "91aff283d62081c84366d8d858316693",
                    "full_info": [
                    {
                        "quotes": "Detective Jake Peralta: [about the lie detector] I'm telling you, this machine is broken. Ask me a question.::Sergeant Terry Jeffords: Is Jay-Z really your favorite artist?::Detective Jake Peralta: Yes, obviously.::Abel: Lie.::Detective Jake Peralta: See? It's busted!::Sergeant Terry Jeffords: Is it? Or is your favorite artist really Taylor Swift?::Detective Jake Peralta: [sighs] No.::Abel: Lie.::Detective Jake Peralta: Alright, fine, she is. She makes me feel things.::Sergeant Terry Jeffords: She makes all of us feel things!"
                    },
                    {
                        "soundtrack": "\"Whatta Man\" (uncredited) Written by 'Cheryl 'Salt' James' (qv), 'Dave Crawford (II)' (qv) and 'Hurby Luv Bug Azor' (qv) Performed by 'Cheryl 'Salt' James' (qv), 'Pepa (VIII)' (qv), 'Spinderella (I)' (qv), 'Salt-N-Pepa' (qv), 'En Vogue' (qv), 'Andy Samberg' (qv) and 'Terry Crews (I)' (qv)"
                    },
                    {
                        "trivia": "It is revealed that Jake's favorite musician is 'Taylor Swift' (qv)."
                    },
                    {
                        "trivia": "SPOILER: The Dexter dying in a boat explosion is a reference to the TV show Dexter's finale. Dexter is thought to have died on his boat in the finale."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "When Jake gets the weekend off, he decides to take on a cold case that everyone thinks is unsolvable, but with the help of Terry, the two try to crack the case once and for all. Meanwhile, Amy plans a romantic trip with Teddy (guest star Kyle Bornheimer) and Gina and Rosa let Charles in on one of their best-kept secrets."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:18 March 2014"
                    },
                    {
                        "release dates": "UK:5 June 2014"
                    },
                    {
                        "release dates": "Hungary:13 June 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "U5241",
                    "id": 315991,
                    "title": "Unsolvable",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Pilot",
                "id": "4.355828",
                "label": "production",
                "props":
                {
                    "episode_nr": 1,
                    "kind": "episode",
                    "md5sum": "1bbf7a61860e3cd1c93b6c96b4e4347a",
                    "full_info": [
                    {
                        "quotes": "Amy Santiago: Wall Street Journal on the doormat, top floor apartment... 20 bucks says this guy is like a hot, eligible bachelor.::Jake Peralta: I'll take that action. [knocks on door] Police, open up!::Old Man: Hello?::Jake Peralta: Oh! Hello sir, how are you today? I am Detective Right-All-The-Time, and this is my partner, Detective Terrible Detective."
                    },
                    {
                        "quotes": "Jake Peralta: Never took off the speedo. Big mistake, it is inside me."
                    },
                    {
                        "trivia": "The murder victim's name in this first/pilot episode is an offbeat insider's reference. The wealthy murdered man is \"Henry Morganthau\", and in real life, the Morganthaus have long been one of New York City's most accomplished families. Even more pointed in terms of cops and crime, the real-life 'Henry Morgenthau' (qv)'s grandson is 'Robert Morgenthau' (qv), who was the longest serving District Attorney in Manhattan's history, from 1975 until he stepped down in 2009."
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Detective Jake Peralta (Andy Samberg) is a talented, but carefree police detective at Brooklyn's ninety-ninth precinct who, along with his eclectic group of colleagues, are used to having a lax captain around the office. However, when tightly-wound Captain Ray Holt (Andre Braugher) takes over, he is determined to make this dysfunctional group of detectives into the best precinct in Brooklyn."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "23"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:17 September 2013"
                    },
                    {
                        "release dates": "Sweden:6 January 2014"
                    },
                    {
                        "release dates": "UK:16 January 2014"
                    },
                    {
                        "release dates": "Hungary:4 April 2014"
                    },
                    {
                        "release dates": "Netherlands:24 August 2014"
                    },
                    {
                        "release dates": "Finland:3 September 2014"
                    },
                    {
                        "release dates": "Austria:1 August 2015"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    },
                    {
                        "release dates": "Switzerland:1 August 2015"
                    }],
                    "phonetic_code": "P43",
                    "id": 315957,
                    "title": "Pilot",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "M.E. Time",
                "id": "4.362135",
                "label": "production",
                "props":
                {
                    "episode_nr": 4,
                    "kind": "episode",
                    "md5sum": "c22149417cb6a858c73d59e9f9b1dd48",
                    "full_info": [
                    {
                        "goofs": "CONT: The M.E tells Jake to look into the body to see the scarring on the liver, even though they extracted his liver in an earlier scene."
                    },
                    {
                        "goofs": "CONT: SPOILER: The victim's wife tells Boyle in the apartment that she and her husband were due to go on a cruise the following week, but later on Boyle is reading her statement to Diaz and he says the cruise was to take place the next month."
                    },
                    {
                        "goofs": "CONT: When Holt throws out his portrait, it is in a frame with glass covering it. When Santiago removes it later from the same garbage can, the glass is missing."
                    },
                    {
                        "soundtrack": "\"Oscar's Blues\" (uncredited) Administered by 'Bob Mair' (qv)"
                    },
                    {
                        "soundtrack": "\"Consider Yourself\" (uncredited) Written by 'Lionel Bart' (qv) Performed by 'Jack Wild (I)' (qv) and 'Joe Lo Truglio' (qv)"
                    },
                    {
                        "trivia": "In this episode Sgt. Jeffords is revealed to have hidden artistic talents and fills in for the precinct sketch artist. In real life Terry Crews (the actor who plays Sgt. Jeffords) is also a talented artist and used to draw and paint on the side to get extra money to support his family during his football days."
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Much to the team's annoyance, Jake hits on an attractive medical examiner, Dr. Rossi (guest star Mary Elizabeth Ellis), at a crime scene and holds up the autopsy report. He learns his lesson when Dr. Rossi turns out to be more than he bargained for. Meanwhile, Amy's purse-snatching case is stalled when the sketch artist is out sick, but she discovers that Sgt. Jeffords has hidden artistic talents."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:8 October 2013"
                    },
                    {
                        "release dates": "UK:6 February 2014"
                    },
                    {
                        "release dates": "Hungary:11 April 2014"
                    },
                    {
                        "release dates": "Netherlands:7 September 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "M35",
                    "id": 315948,
                    "title": "M.E. Time",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "The Slump",
                "id": "4.363073",
                "label": "production",
                "props":
                {
                    "episode_nr": 3,
                    "kind": "episode",
                    "md5sum": "dd3a3257f937f5ac46e47423f6cf03e4",
                    "full_info": [
                    {
                        "goofs": "FACT: In the cold open, the squad is listing their favorite cop movies. One mentions \"'François Truffaut' (qv)'s 'Breathless'\". 'Jean-Luc Godard' (qv) made _À bout de souffle (1960)_ (qv) (whose US title was \"Breathless\"), although, to be fair, Truffaut did write the story."
                    },
                    {
                        "soundtrack": "\"Beautiful\" (uncredited) Written by 'Linda Perry (IV)' (qv) Performed by 'Christina Aguilera' (qv)"
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Jake has a slew of unsolved cases that he can't seem to close, and the other detectives don't want his losing streak to rub off on them. Meanwhile, Holt asks Amy to run lead on the Junior Policeman Program for at-risk youth, and she enlists Rosa and Gina's help. Also, Boyle helps Sergeant Jeffords with a special case he cannot solve."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:1 October 2013"
                    },
                    {
                        "release dates": "UK:30 January 2014"
                    },
                    {
                        "release dates": "Hungary:11 April 2014"
                    },
                    {
                        "release dates": "Netherlands:31 August 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "S451",
                    "id": 315985,
                    "title": "The Slump",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Tactical Village",
                "id": "4.365332",
                "label": "production",
                "props":
                {
                    "episode_nr": 19,
                    "kind": "episode",
                    "md5sum": "c09cf13473d6b1c2ba38dbb5cf629bbd",
                    "full_info": [
                    {
                        "trivia": "The game Holt plays: \"Kwazy Cupcakes\" in the epidode \"Tactical Village\" has since been made into an actual playable app on the app store with levels leading to Sprinkle City."
                    },
                    {
                        "copyright holder": "Copyright © 2014 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "The precinct heads to Tactical Village Day, a mandatory training course in which all regional precincts compete. While there, Amy runs into Teddy (guest star Kyle Bornheimer), a fellow officer she used to date. Meanwhile, Holt becomes addicted to a game on his phone and Rosa is pissed at Charles for not inviting her to his wedding."
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:4 March 2014"
                    },
                    {
                        "release dates": "UK:22 May 2014"
                    },
                    {
                        "release dates": "Hungary:6 July 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "T2324",
                    "id": 315964,
                    "title": "Tactical Village",
                    "season_nr": 1,
                    "production_year": 2014
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Sal's Pizza",
                "id": "4.371276",
                "label": "production",
                "props":
                {
                    "episode_nr": 9,
                    "kind": "episode",
                    "md5sum": "6f99e511deb85a38cf3f9ea9b4efdeb0",
                    "full_info": [
                    {
                        "trivia": "Patton Oswalt's character Fire Marshall Boone is named after the Associate Producer of 9 of the shows first 11 episodes Marshall Boone."
                    },
                    {
                        "trivia": "During the closing credits, right at the moment when Jake Peralta announces \"I've been booned\", the name of associate producer 'Marshall Boone' (qv) shows up."
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "When Sal's Pizza burns down and the fire marshal (guest star Patton Oswalt) quickly assumes that the owner is the prime suspect in the investigation, Jake does everything in his power to prove him wrong, even if it means stepping out of his jurisdiction. Meanwhile back at the precinct, chaos ensues when a computer virus publishes everyone's browser history."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:19 November 2013"
                    },
                    {
                        "release dates": "UK:13 March 2014"
                    },
                    {
                        "release dates": "Hungary:2 May 2014"
                    },
                    {
                        "release dates": "Netherlands:28 September 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "S4212",
                    "id": 315960,
                    "title": "Sal's Pizza",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        },
        {
            "data":
            {
                "name": "Christmas",
                "id": "4.378393",
                "label": "production",
                "props":
                {
                    "episode_nr": 11,
                    "kind": "episode",
                    "md5sum": "0ff73b582521e0b77099e00c2fb23dad",
                    "full_info": [
                    {
                        "goofs": "FACT: SPOILER: When Peralta handcuffs himself to Holt, he throws the key down the heating vent, presumably so the cuffs can't be unlocked. Holt would have his own handcuff key and would be able to unlock the cuffs with this key."
                    },
                    {
                        "soundtrack": "\"Christmas in Hollis\" (uncredited) Written by 'Joseph Simmons (I)' (qv), 'Darryl McDaniels' (qv), 'Jason Mizell' (qv) and 'Run-D.M.C.' (qv) Performed by 'Joseph Simmons (I)' (qv), 'Darryl McDaniels' (qv), 'Jason Mizell' (qv) and 'Run-D.M.C.' (qv)"
                    },
                    {
                        "trivia": "The pre-credit sequence features the song \"Christmas in Hollis\" by Run-DMC, also used in Die Hard, Peralta's favourite film."
                    },
                    {
                        "copyright holder": "Copyright © 2013 NBC Studios LLC. All Rights Reserved."
                    },
                    {
                        "plot": "Captain Holt receives death threats and Jake is put in charge of his security, a job he enjoys and abuses as much as he can. Meanwhile, Amy attempts to get the precinct to take a Christmas photo for Holt, but a lack of enthusiasm and Rosa's refusal to smile defeats her efforts. Also, Sergeant Terry Jeffords gets his mojo back."
                    },
                    {
                        "certificates": "Netherlands:6"
                    },
                    {
                        "certificates": "USA:TV-14"
                    },
                    {
                        "color info": "Color"
                    },
                    {
                        "countries": "USA"
                    },
                    {
                        "languages": "English"
                    },
                    {
                        "locations": "CBS Studio Center - 4024 Radford Avenue, Studio City, Los Angeles, California, USA"
                    },
                    {
                        "runtimes": "22"
                    },
                    {
                        "runtimes": "21"
                    },
                    {
                        "sound mix": "Stereo"
                    },
                    {
                        "tech info": "RAT:16:9 HD"
                    },
                    {
                        "release dates": "USA:3 December 2013"
                    },
                    {
                        "release dates": "UK:27 March 2014"
                    },
                    {
                        "release dates": "Hungary:9 May 2014"
                    },
                    {
                        "release dates": "Germany:1 August 2015"
                    }],
                    "phonetic_code": "C6235",
                    "id": 315928,
                    "title": "Christmas",
                    "season_nr": 1,
                    "production_year": 2013
                }
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing production"
        }],
        "edges": [
        {
            "data":
            {
                "id": "9.221110",
                "label": "produced",
                "name": "9.221110",
                "props":
                {},
                "source": "5.164566",
                "target": "4.1882491"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "id": "8.205916",
                "label": "distributed",
                "name": "8.205916",
                "props":
                {},
                "source": "5.19436",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "distributed"
        },
        {
            "data":
            {
                "id": "8.1604315",
                "label": "distributed",
                "name": "8.1604315",
                "props":
                {},
                "source": "5.28292",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "distributed"
        },
        {
            "data":
            {
                "id": "8.1160489",
                "label": "distributed",
                "name": "8.1160489",
                "props":
                {},
                "source": "5.91491",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "distributed"
        },
        {
            "data":
            {
                "id": "8.1776340",
                "label": "distributed",
                "name": "8.1776340",
                "props":
                {},
                "source": "5.92088",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "distributed"
        },
        {
            "data":
            {
                "id": "9.239813",
                "label": "produced",
                "name": "9.239813",
                "props":
                {},
                "source": "5.12042",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "id": "9.1389611",
                "label": "produced",
                "name": "9.1389611",
                "props":
                {},
                "source": "5.162689",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "id": "9.239814",
                "label": "produced",
                "name": "9.239814",
                "props":
                {},
                "source": "5.170509",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "id": "9.978785",
                "label": "produced",
                "name": "9.978785",
                "props":
                {},
                "source": "5.180750",
                "target": "4.1949538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "id": "9.1606884",
                "label": "produced",
                "name": "9.1606884",
                "props":
                {},
                "source": "5.110894",
                "target": "4.1968792"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "produced"
        },
        {
            "data":
            {
                "name": "8.1594555",
                "id": "8.1594555",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.5475"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595076",
                "id": "8.1595076",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.8928"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594556",
                "id": "8.1594556",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.9538"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594890",
                "id": "8.1594890",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.32408"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594891",
                "id": "8.1594891",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.33300"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594888",
                "id": "8.1594888",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.36209"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594858",
                "id": "8.1594858",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.36644"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594558",
                "id": "8.1594558",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.39509"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594882",
                "id": "8.1594882",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.39728"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594554",
                "id": "8.1594554",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.42890"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594886",
                "id": "8.1594886",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.45590"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594557",
                "id": "8.1594557",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.46799"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594887",
                "id": "8.1594887",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.71318"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1594889",
                "id": "8.1594889",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.91695"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595487",
                "id": "8.1595487",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.127267"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595485",
                "id": "8.1595485",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.145139"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595484",
                "id": "8.1595484",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.145380"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595486",
                "id": "8.1595486",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.147368"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595645",
                "id": "8.1595645",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.151204"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595481",
                "id": "8.1595481",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.164452"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595488",
                "id": "8.1595488",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.168842"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595482",
                "id": "8.1595482",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.169305"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595258",
                "id": "8.1595258",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.174236"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595490",
                "id": "8.1595490",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.176600"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595483",
                "id": "8.1595483",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.190230"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595480",
                "id": "8.1595480",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.192039"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595489",
                "id": "8.1595489",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.197734"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595716",
                "id": "8.1595716",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.200703"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596022",
                "id": "8.1596022",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.201421"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595796",
                "id": "8.1595796",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.202679"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595723",
                "id": "8.1595723",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.202790"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595680",
                "id": "8.1595680",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.205121"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595941",
                "id": "8.1595941",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.205768"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595929",
                "id": "8.1595929",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.206686"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596021",
                "id": "8.1596021",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.206937"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596684",
                "id": "8.1596684",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.211972"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596581",
                "id": "8.1596581",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.213744"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595947",
                "id": "8.1595947",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.213764"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595697",
                "id": "8.1595697",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.220918"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595714",
                "id": "8.1595714",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.224626"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596020",
                "id": "8.1596020",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.225652"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595717",
                "id": "8.1595717",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.229898"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596019",
                "id": "8.1596019",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.231351"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595949",
                "id": "8.1595949",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.231428"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595937",
                "id": "8.1595937",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.231842"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595938",
                "id": "8.1595938",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.231985"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595948",
                "id": "8.1595948",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.232048"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595893",
                "id": "8.1595893",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.233520"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596677",
                "id": "8.1596677",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.234758"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596661",
                "id": "8.1596661",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.234943"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595945",
                "id": "8.1595945",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.237383"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596663",
                "id": "8.1596663",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.237749"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595720",
                "id": "8.1595720",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.246856"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595940",
                "id": "8.1595940",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.246978"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595718",
                "id": "8.1595718",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.250017"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595939",
                "id": "8.1595939",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.250969"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596680",
                "id": "8.1596680",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.251526"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595722",
                "id": "8.1595722",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.251752"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595892",
                "id": "8.1595892",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.252292"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596672",
                "id": "8.1596672",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.259656"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596017",
                "id": "8.1596017",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.261325"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595946",
                "id": "8.1595946",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.261956"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595719",
                "id": "8.1595719",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.264151"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596024",
                "id": "8.1596024",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.267073"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595943",
                "id": "8.1595943",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.267463"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596579",
                "id": "8.1596579",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.268838"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595721",
                "id": "8.1595721",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.271813"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596688",
                "id": "8.1596688",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.271936"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596580",
                "id": "8.1596580",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.273666"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595950",
                "id": "8.1595950",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.276048"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596023",
                "id": "8.1596023",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.278069"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596691",
                "id": "8.1596691",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.279138"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596666",
                "id": "8.1596666",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.280073"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595944",
                "id": "8.1595944",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.282975"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596686",
                "id": "8.1596686",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.294723"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595724",
                "id": "8.1595724",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.294868"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1595942",
                "id": "8.1595942",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.295462"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596695",
                "id": "8.1596695",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.296294"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596748",
                "id": "8.1596748",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.303272"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596865",
                "id": "8.1596865",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.306811"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596874",
                "id": "8.1596874",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.310711"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596855",
                "id": "8.1596855",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.314971"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596852",
                "id": "8.1596852",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.320851"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596872",
                "id": "8.1596872",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.324626"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596883",
                "id": "8.1596883",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.326179"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1597029",
                "id": "8.1597029",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.326688"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596978",
                "id": "8.1596978",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.328293"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1597153",
                "id": "8.1597153",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.330082"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596871",
                "id": "8.1596871",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.331464"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1597017",
                "id": "8.1597017",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.335795"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596873",
                "id": "8.1596873",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.337718"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596859",
                "id": "8.1596859",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.342729"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596862",
                "id": "8.1596862",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.343046"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596882",
                "id": "8.1596882",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.352345"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596864",
                "id": "8.1596864",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.355828"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596858",
                "id": "8.1596858",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.362135"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596876",
                "id": "8.1596876",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.363073"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596868",
                "id": "8.1596868",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.365332"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596867",
                "id": "8.1596867",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.371276"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        },
        {
            "data":
            {
                "name": "8.1596851",
                "id": "8.1596851",
                "label": "distributed",
                "source": "5.28292",
                "props":
                {},
                "target": "4.378393"
            },
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": "5.28292 expand ingoing distributed"
        }]
    },
    // demoData[2]
    {
    "edges": [
      {
        "classes": "distributed 8.392856",
        "data": {
          "id": "8.392856",
          "label": "distributed",
          "name": "8.392856",
          "props": {},
          "source": "5.28170",
          "target": "4.3383466"
        },
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.398709",
        "data": {
          "id": "9.398709",
          "label": "produced",
          "name": "9.398709",
          "props": {},
          "source": "5.28170",
          "target": "4.3383466"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.1660262",
        "data": {
          "id": "8.1660262",
          "label": "distributed",
          "name": "8.1660262",
          "props": {},
          "source": "5.86838",
          "target": "4.3391181"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.2262633",
        "data": {
          "id": "9.2262633",
          "label": "produced",
          "name": "9.2262633",
          "props": {},
          "source": "5.86838",
          "target": "4.3391181"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.662599",
        "data": {
          "id": "9.662599",
          "label": "produced",
          "name": "9.662599",
          "props": {},
          "source": "5.248251",
          "target": "4.3394553"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.2485932",
        "data": {
          "id": "9.2485932",
          "label": "produced",
          "name": "9.2485932",
          "props": {},
          "source": "5.34997",
          "target": "4.3397690"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.1911970",
        "data": {
          "id": "9.1911970",
          "label": "produced",
          "name": "9.1911970",
          "props": {},
          "source": "5.69140",
          "target": "4.3398121"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.965184",
        "data": {
          "id": "8.965184",
          "label": "distributed",
          "name": "8.965184",
          "props": {},
          "source": "5.3494",
          "target": "4.7058"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.5",
        "data": {
          "id": "9.5",
          "label": "produced",
          "name": "9.5",
          "props": {},
          "source": "5.147917",
          "target": "4.7058"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.1465218",
        "data": {
          "id": "8.1465218",
          "label": "distributed",
          "name": "8.1465218",
          "props": {},
          "source": "5.15265",
          "target": "4.465225"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      }
    ],
    "nodes": [
      {
        "classes": "production 4.3383466",
        "data": {
          "_order": "start",
          "id": "4.3383466",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "alternate_titles": [
              {
                "aka_title": "Your True Adventures (1938-1939 season) #10: Haunted House",
                "kind": "movie",
                "md5sum": "e2b23a4f18ce3f9164c470a04597b083",
                "note": "(USA) (series title)",
                "phonetic_code": "Y6363",
                "production_year": 1939
              }
            ],
            "full_info": [
              {
                "trivia": "Vitaphone Production Reel #B156."
              },
              {
                "plot": "This edition of Vitaphone's \"Your True Adventure\" has Floyd Gibbons relating the story of two young girls who, while waiting on a bus, enter an abandoned house where an escaped convict is hiding, and he locks them up in a room. After the convict leaves, one of the girls is injured when she falls through a decayed floor into the cellar, and the second girl nurses her through a terrifying night."
              },
              {
                "color info": "Black and White"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Adventure"
              },
              {
                "genres": "Crime"
              },
              {
                "genres": "Short"
              },
              {
                "languages": "English"
              },
              {
                "runtimes": "12"
              },
              {
                "sound mix": "Mono"
              },
              {
                "tech info": "MET:330 m"
              },
              {
                "tech info": "OFM:35 mm"
              },
              {
                "tech info": "PCS:Spherical"
              },
              {
                "tech info": "PFM:35 mm"
              },
              {
                "tech info": "RAT:1.37 : 1"
              },
              {
                "release dates": "USA:3 June 1939"
              }
            ],
            "id": 3331917,
            "kind": "movie",
            "md5sum": "5c6c06585166bc291d09c63105631aec",
            "phonetic_code": "H532",
            "production_year": 1939,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.28170",
        "data": {
          "_order": "end",
          "id": "5.28170",
          "label": "company",
          "name": "Warner Bros.",
          "props": {
            "country_code": "[us]",
            "id": 1355,
            "md5sum": "014584dc71656c7a48222cdef719a123",
            "name": "Warner Bros.",
            "name_pcode_nf": "W6561",
            "name_pcode_sf": "W6561"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3391181",
        "data": {
          "_order": "start",
          "id": "4.3391181",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "countries": "USA"
              },
              {
                "genres": "Family"
              },
              {
                "genres": "Horror"
              },
              {
                "genres": "Mystery"
              },
              {
                "languages": "English"
              },
              {
                "release dates": "USA:1 May 1972"
              }
            ],
            "id": 3331920,
            "kind": "video game",
            "md5sum": "118d8caf2669355e3f3f7d5612fa0656",
            "phonetic_code": "H532",
            "production_year": 1972,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.86838",
        "data": {
          "_order": "end",
          "id": "5.86838",
          "label": "company",
          "name": "Magnavox",
          "props": {
            "id": 31927,
            "md5sum": "fb4d1406108c5aa244502782a6970b88",
            "name": "Magnavox",
            "name_pcode_nf": "M2512"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3394553",
        "data": {
          "_order": "start",
          "id": "4.3394553",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "budget": "$1,400"
              },
              {
                "color info": "Color"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Horror"
              },
              {
                "genres": "Short"
              },
              {
                "languages": "English"
              },
              {
                "runtimes": "USA:11"
              },
              {
                "sound mix": "Stereo"
              },
              {
                "tech info": "RAT:1.85 : 1"
              },
              {
                "release dates": "USA:19 February 2009"
              },
              {
                "release dates": "USA:21 May 2009"
              },
              {
                "release dates": "USA:24 May 2009"
              },
              {
                "taglines": "Thank God it's make-believe..."
              }
            ],
            "id": 3331924,
            "kind": "movie",
            "md5sum": "f46f3bc0783bd29cba26872f305d3421",
            "phonetic_code": "H532",
            "production_year": 2009,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.248251",
        "data": {
          "_order": "end",
          "id": "5.248251",
          "label": "company",
          "name": "Blue World Films",
          "props": {
            "country_code": "[us]",
            "id": 230790,
            "md5sum": "2c009856c4b62f83042dede53eda0ea3",
            "name": "Blue World Films",
            "name_pcode_nf": "B4643",
            "name_pcode_sf": "B4643"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3397690",
        "data": {
          "_order": "start",
          "id": "4.3397690",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "color info": "Color"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Horror"
              },
              {
                "languages": "English"
              }
            ],
            "id": 3331921,
            "kind": "video game",
            "md5sum": "df53d2ed4be16d210280f498d064bed7",
            "phonetic_code": "H532",
            "production_year": 1981,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.34997",
        "data": {
          "_order": "end",
          "id": "5.34997",
          "label": "company",
          "name": "Atari",
          "props": {
            "id": 17749,
            "md5sum": "ac8fe873bc90b3779dd13935dd6f29f2",
            "name": "Atari",
            "name_pcode_nf": "A36"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3398121",
        "data": {
          "_order": "start",
          "id": "4.3398121",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "color info": "Black and White"
              },
              {
                "countries": "Philippines"
              },
              {
                "genres": "Comedy"
              },
              {
                "languages": "Tagalog"
              },
              {
                "languages": "English"
              },
              {
                "locations": "Manila, Metro Manila, Philippines"
              },
              {
                "sound mix": "Mono"
              },
              {
                "tech info": "OFM:35 mm"
              },
              {
                "tech info": "PFM:35 mm"
              },
              {
                "release dates": "Philippines:November 1942"
              }
            ],
            "id": 3331919,
            "kind": "movie",
            "md5sum": "e44b0cc37ecab3d1a316d1ea791c92ae",
            "phonetic_code": "H532",
            "production_year": 1942,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.69140",
        "data": {
          "_order": "end",
          "id": "5.69140",
          "label": "company",
          "name": "Sampaguita Pictures",
          "props": {
            "country_code": "[ph]",
            "id": 21958,
            "md5sum": "e46f6ab26c1fb1bc8095b03b8bea2a37",
            "name": "Sampaguita Pictures",
            "name_pcode_nf": "S5123",
            "name_pcode_sf": "S5123"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.7058",
        "data": {
          "_order": "start",
          "id": "4.7058",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "episode_nr": 6,
            "full_info": [
              {
                "tech info": "CAM:Arri Alexa"
              },
              {
                "tech info": "CAM:Canon 5D Mark II SLR Camera, Canon Lenses"
              },
              {
                "release dates": "Australia:26 November 2013"
              }
            ],
            "id": 51,
            "kind": "episode",
            "md5sum": "9fae28455fdcdbcb6a725e501abea51a",
            "phonetic_code": "H532",
            "production_year": 2013,
            "season_nr": 1,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.3494",
        "data": {
          "_order": "end",
          "id": "5.3494",
          "label": "company",
          "name": "Australian Broadcasting Corporation (ABC)",
          "props": {
            "country_code": "[au]",
            "id": 5,
            "md5sum": "3543eb7b85c34815894baad029499929",
            "name": "Australian Broadcasting Corporation (ABC)",
            "name_pcode_nf": "A2364",
            "name_pcode_sf": "A2364"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.147917",
        "data": {
          "_order": "end",
          "id": "5.147917",
          "label": "company",
          "name": "Ludo Studio",
          "props": {
            "country_code": "[au]",
            "id": 104142,
            "md5sum": "fd0519f468a5b6d8cebaf25be83bf3f8",
            "name": "Ludo Studio",
            "name_pcode_nf": "L323",
            "name_pcode_sf": "L323"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.465225",
        "data": {
          "_order": "start",
          "id": "4.465225",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "episode_nr": 6,
            "full_info": [
              {
                "certificates": "Argentina:Atp"
              },
              {
                "color info": "Color"
              },
              {
                "languages": "English"
              },
              {
                "locations": "Orlando, Florida, USA"
              },
              {
                "runtimes": "Argentina:28"
              },
              {
                "sound mix": "Stereo"
              },
              {
                "tech info": "OFM:Video"
              },
              {
                "tech info": "PFM:Video"
              },
              {
                "tech info": "RAT:1.33 : 1"
              },
              {
                "release dates": "USA:20 April 1991"
              }
            ],
            "id": 422824,
            "kind": "episode",
            "md5sum": "f886d3c914379356744600e88790d844",
            "phonetic_code": "H532",
            "production_year": 1991,
            "season_nr": 1,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.15265",
        "data": {
          "_order": "end",
          "id": "5.15265",
          "label": "company",
          "name": "Nickelodeon Network",
          "props": {
            "country_code": "[us]",
            "id": 28,
            "md5sum": "9cf3e3c2967ec121356ba22b5d06a940",
            "name": "Nickelodeon Network",
            "name_pcode_nf": "N2435",
            "name_pcode_sf": "N2435"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "removed": false,
        "selectable": true,
        "selected": false
      }
    ]
    },
  ];
  /////////////////////////////////////////////////////////
  // console.log("agens-demo-data.js is loaded!");
 
}( window.agens.graph = window.agens.graph || {}, jQuery ));
