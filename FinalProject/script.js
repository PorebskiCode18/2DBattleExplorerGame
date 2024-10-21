var main = new Image()
main.src="mainCharacter.png"
var side = new Image()
side.src = "sideCharacter.png"
var cave1=new Image()
cave1.src="caveMonster1.png"
var cave2= new Image()
cave2.src="caveMonster2.png"
var cave3= new Image()
cave3.src="caveMonster3.png"
var cave4=new Image()
cave4.src="cave4.png"
var castle1= new Image()
castle1.src="castleMonster1.png"
var castle2= new Image()
castle2.src="castleMonster2.png"
var grass1 = new Image()
grass1.src="grassMonster1.png"
var grass2 = new Image()
grass2.src = "grassMonster2.png"
var forest= new Image()
forest.src="ForestBackground.png"
var cave = new Image()
cave.src="caveBack.PNG"
var castle= new Image()
castle.src="castleBackground.jpg"
var brick= new Image()
brick.src="brick.png"
var stone=new Image()
stone.src="stone.png"
var questionBox= new Image()
questionBox.src="questionBox.png"
var spike = new Image()
spike.src="spike.png"

var sword1R = new Image()
sword1R.src="sword1R.png"
var sword1L = new Image()
sword1L.src="sword1L.png"
var sword1D = new Image()
sword1D.src="sword1D.png"

var sword2R=new Image()
sword2R.src="sword2R.png"
var sword2L = new Image()
sword2L.src="sword2L.png"
var sword2D = new Image()
sword2D.src="sword2D.png"

var sword3R=new Image()
sword3R.src="sword3R.png"
var sword3L = new Image()
sword3L.src="sword3L.png"
var sword3D = new Image()
sword3D.src="sword3D.png"

var sword4R=new Image()
sword4R.src="sword4R.png"
var sword4L = new Image()
sword4L.src="sword4L.png"
var sword4D = new Image()
sword4D.src="sword4D.png"

var sword5R=new Image()
sword5R.src="sword5R.png"
var sword5L = new Image()
sword5L.src="sword5L.png"
var sword5D = new Image()
sword5D.src="sword5D.png"

var sword6R=new Image()
sword6R.src="sword6R.png"
var sword6L = new Image()
sword6L.src="sword6L.png"
var sword6D = new Image()
sword6D.src="sword6D.png"

var sword7R=new Image()
sword7R.src="sword7R.png"
var sword7L = new Image()
sword7L.src="sword7L.png"
var sword7D = new Image()
sword7D.src="sword7D.png"

var arrow1R = new Image()
arrow1R.src="arrow1R.png"
var arrow1L = new Image()
arrow1L.src="arrow1L.png"
var arrow2R = new Image()
arrow2R.src="arrow2R.png"
var arrow2L = new Image()
arrow2L.src="arrow2L.png"
var arrow3R = new Image()
arrow3R.src="arrow3R.png"
var arrow3L = new Image()
arrow3L.src="arrow3L.png"
var portalGun= new Image()
portalGun.src="portalGun.png"
var portalOrb= new Image()
portalOrb.src="portalOrb.png"
var worldPortal = new Image()
worldPortal.src="worldPortal.png"
var spikes= new Image()
spikes.src="spikes.png"
var checkPoint= new Image()
checkPoint.src="checkPoint.png"
var checkPointB=new Image()
checkPointB.src="checkPointB.png"
var eagleSpawner=new Image()
eagleSpawner.src="eagleSpawner.png"
var spiderSpawner=new Image()
spiderSpawner.src="spiderSpawner.png"
var spiderSpawner2=new Image()
spiderSpawner2.src="spiderSpawner.png"
var store = new Image()
store.src="store.png"
var scraps= new Image()
scraps.src="scrap.png"
var slime=new Image()
slime.src="slimeBall.png"
var normFeather=new Image()
normFeather.src="normFeather.png"
var iron = new Image()
iron.src="iron.png"
var coin=new Image()
coin.src="coin.png"
var string=new Image()
string.src="string.png"
var spiderEye= new Image()
spiderEye.src="spiderEye.png"
var bossEye = new Image()
bossEye.src="MainSpiderEye.png"
var caveEntr=new Image()
caveEntr.src="cave entrance.png"
var teleporterOff1=new Image()
teleporterOff1.src="teleporterOff.png"
var teleporterOff2=new Image()
teleporterOff2.src="teleporterOff.png"
var teleporterOn1=new Image()
teleporterOn1.src="teleporterOn.png"
var teleporterOn2=new Image()
teleporterOn2.src="teleporterOn.png"
var activatorPillar=new Image()
activatorPillar.src="activatorPillar.png"
var minerNpc=new Image()
minerNpc.src="minerNpc.png"
var greenApple= new Image()
greenApple.src="greenApple.png"
var spiderHeart=new Image()
spiderHeart.src="spiderHeart.jpg"
var spiderHeart2=new Image()
spiderHeart2.src="spiderHeart.jpg"
var spiderHeart3=new Image()
spiderHeart3.src="spiderHeart.jpg"
var stringBall=new Image()
stringBall.src="stringBall.png"
var wind= new Image()
wind.src="wind.png"
var templeEntrance=new Image()
templeEntrance.src="templeEntrance.png"
var world=1
var worldPart=1
var brickArray=[]
var monsterArray=[]
var arrowArray=[]
var questionBoxArray=[]
var checkPointArray=[]
var notifications=[]
var isTouchingBrick=false
var sideisTouchingBrick=false
var FirstTime=true
var playerSpeed=2
var jumping=false
var canJump=true
var isTouchingGround=true
var sideisTouchingGround=true
var stopJump=false
var specialBrick=[]
var specialHit=[]
var firstTime2=true
var firstTime3=true
var spikeArray=[]
var MonSpikeArray=[]
var forestDiscovered=[false,false,false,false]
var caveDiscovered=[false,false,false]
var castleDiscovered=[false,false,false]
var loadPart=true
var monsterSpeed=[]
var monsterDead=[]
var monsterType=[]
var monsterDamage=[]
var playerHealth=100
var playerShield=0
var monsterCoolDown=[]
var SwordEquipped=false
var monsterCoolDownLength=[]
var monsterHealth=[]
var currentSword=0
var currentArrow=0
var swordDamage=0
var swordCoolDown=0
var attackCoolDown=0
var maxMonsterHealth=[]
var monsterIsTouchingBrickL=[]
var monsterIsTouchingBrickR=[]
var swordsR=[]
var swordsL=[]
var swordsD=[]
var arrowR=[]
var arrowL=[]
var powers=[]
var loadSword=true
var test=false
var swordSide=1
var largeAttack=false
var windAttack=0
var windAttackCoolDown=0
var maxWindAttackCooldown=1000
var canUseWind=false
var leftSide=0
var rightSide=0
var closestMonster=-1
var closestFound=false
var y=0
var x=0
var x2=0
var y2=0
var arrowPath=[]
var arrowX=[]
var arrowCoolDown=0
var arrowCoolDownMax=0
var monsterPath=[]
var monsterX=[]
var ballArray=[]
var ballX=[]
var ballPath=[]
var loadSide=true
var shoot=false
var sideCheck=0
var sideLoad=0
var portalGunVisible=false
var portalOrbVisible=false
var portalX=0
var portalY=0
var portalPath=0
var firstPortalLoad=false
var secondPortalLoad=false
var arrowDamage=0
var arrowBelow=true
var isTouchingSideBrickL=false
var isTouchingSideBrickR=false
var mapOpen=false
var introPart=1
var Wused=false
var Aused=false
var Sused=false
var Dused=false
var OneUsed=false
var SpaceUsed=false
var go= false
var wait=500
var wait2=500
var sideMoved=false
var sideTeleport=false
var Qused=false
var continueIntro=false
var continueIntro2=false
var Fused=false
var monstersDefeated=0
var introWanted=""
var currentCheckPoint=0
var checkPointUsed=false
var respawnUsed=false
var eagleSpawn=false
var storeThere=false
var eagleCoolDown=0
var eagleMaxCoolDown=1000
var spiderSpawn=false
var templeSpawn=false
var spiderCoolDown=0
var templeCoolDown=0
var spiderMaxCoolDown=3000
var spiderSpawn1Health=50
var spiderSpawn2Health=50
var notificationTime=0
var inventory=[0,0,0,0,0,0,0,0,0]
var inventoryAdd=0
var tempInventory=[0,0,0,0,0,0,0,0,0]
var inventoryOpen=false
var storeOpen=false
var teleporterIsOn=[false,false]
var currentStorePart=0
var storeSection=0
var storeChoosen=0
var bought=[true,false,false,false,false,false,false]
var boughtArrow=[true,false,false]
var boughtPowers=[true,false]
var swordNames=["Wooden","Stone","Slime","Iron","Mega Iron","Spider Eye","Dark Knight"]
var arrowNames=["Wooden","Iron","Ultimate","Spider King"]
var powerNames=["Wind","String Ball"]
var minerTalk=false
var quests=["Find the castle"]
var minerTalked=false
var teleportAvailabe=false
var spiderBossSpikeAttacks=0
var spiderBossDefeated=false
var currentPower=0
function initialize(){
    forest = createImage(forest.src,0,0,800,500)
    castle= createImage(castle.src,0,0,800,500)
    caveEntr=createImage(caveEntr.src,600,270,200,200)
    minerNpc=createImage(minerNpc.src,550,435,40,40)
    cave=createImage(cave.src,0,0,800,500)
    templeEntrance=createImage(templeEntrance.src,600,50,200,200)
    drawBackground()
    greenApple=createImage(greenApple.src,-100,-100,30,30)
    spiderHeart=createImage(spiderHeart.src,-100,-100,30,30)
    spiderHeart2=createImage(spiderHeart2.src,-100,-100,30,30)
    spiderHeart3=createImage(spiderHeart3.src,-100,-100,30,30)
    main = createImage(main.src, 100,440,30,30)
    swordsR.push(createImage(sword1R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword1L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword1D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword2R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword2L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword2D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword3R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword3L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword3D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword4R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword4L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword4D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword5R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword5L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword5D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword6R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword6L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword6D.src,main.xLoc+10,445,20,20))
    swordsR.push(createImage(sword7R.src,main.xLoc+30,445,20,20))
    swordsL.push(createImage(sword7L.src,main.xLoc-30,445,20,20))
    swordsD.push(createImage(sword7D.src,main.xLoc+10,445,20,20))

    arrowL.push(createImage(arrow1L.src,side.xLoc,side.yLoc,25,25))
    arrowR.push(createImage(arrow1R.src,side.xLoc+side.width,side.yLoc,25,25))
    arrowL.push(createImage(arrow2L.src,side.xLoc,side.yLoc,25,25))
    arrowR.push(createImage(arrow2R.src,side.xLoc+side.width,side.yLoc,25,25))
    arrowL.push(createImage(arrow3L.src,side.xLoc,side.yLoc,25,25))
    arrowR.push(createImage(arrow3R.src,side.xLoc+side.width,side.yLoc,25,25))
    arrowL.push(createImage(bossEye.src,side.xLoc,side.yLoc,25,25))
    arrowR.push(createImage(bossEye.src,side.xLoc+side.width,side.yLoc,15,25))
    side = createImage(side.src, main.xLoc-30,main.yLoc,30,30)
    portalGun= createImage(portalGun.src,-100,0,15,15)
    portalOrb=createImage(portalOrb.src,-100,0,20,20)
    checkPointB=createImage(checkPointB.src,-100,0,25,25)
    eagleSpawner=createImage(eagleSpawner.src,-100,0,70,30)
    spiderSpawner=createImage(spiderSpawner.src,-100,0,70,30)
    spiderSpawner2=createImage(spiderSpawner2.src,-100,0,70,30)
    scraps=createImage(scraps.src,100,100,40,40)
    slime=createImage(slime.src,100,100,40,40)
    coin=createImage(coin.src,100,100,40,40)
    normFeather=createImage(normFeather.src,100,100,40,40)
    store=createImage(store.src,500,425,100,50)
    activatorPillar=createImage(activatorPillar.src,-100,460,17,30)
    teleporterOff1=createImage(teleporterOff1.src,-100,460,40,13)
    teleporterOff2=createImage(teleporterOff2.src,-100,460,40,13)
    teleporterOn1=createImage(teleporterOn1.src,-100,460,40,13)
    teleporterOn2=createImage(teleporterOn2.src,-100,460,40,13)
    powers.push(createImage(wind.src,300,300,30,30))
    powers.push(createImage(stringBall.src,300,300,30,30))
    if(FirstTime===true){
        animateLoop()
        FirstTime=false
    }
}
function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    //forest
    if(world===1) {
        ctx.drawImage(forest,forest.xLoc,forest.yLoc,forest.width,forest.height)
        if (worldPart===1){
            if (loadPart){
                forestDiscovered[0]=true
                eagleSpawn=false
                storeThere=false
                currentCheckPoint=-1
                checkPointArray.push(createImage(checkPoint.src,200,445,25,25))
                brickArray.push(createImage(brick.src,250,400,20,20))
                brickArray.push(createImage(brick.src,270,400,20,20))
                brickArray.push(createImage(brick.src,290,400,20,20))
                brickArray.push(createImage(brick.src,310,400,20,20))
                brickArray.push(createImage(brick.src,330,400,20,20))

                brickArray.push(createImage(brick.src,390,350,20,20))
                brickArray.push(createImage(brick.src,410,350,20,20))
                brickArray.push(createImage(brick.src,430,350,20,20))
                brickArray.push(createImage(brick.src,450,350,20,20))
                brickArray.push(createImage(brick.src,470,350,20,20))

                brickArray.push(createImage(brick.src,530,300,20,20))
                brickArray.push(createImage(brick.src,550,300,20,20))
                brickArray.push(createImage(brick.src,570,300,20,20))
                brickArray.push(createImage(brick.src,590,300,20,20))
                brickArray.push(createImage(brick.src,610,300,20,20))

                brickArray.push(createImage(brick.src,760,350,20,20))
                brickArray.push(createImage(brick.src,780,350,20,20))

                brickArray.push(createImage(brick.src,780,370,20,20))
                brickArray.push(createImage(brick.src,780,390,20,20))
                brickArray.push(createImage(brick.src,780,410,20,20))
                brickArray.push(createImage(brick.src,780,430,20,20))
                brickArray.push(createImage(brick.src,780,450,20,20))

                for (i=0;i<brickArray.length;i++){
                    questionBoxArray.push(createImage(questionBox.src,brickArray[i].xLoc,brickArray[i].yLoc,brickArray[i].width,brickArray[i].height))
                }

                monsterArray.push(createImage(grass1.src,500,445,30,30))
                monsterType.push(1)
                monsterArray.push(createImage(grass1.src,600,445,30,30))
                monsterType.push(1)
                for (i=0;i<monsterType.length;i++){
                    if (monsterType[i]===1){
                        monsterSpeed.push(Math.random()*.2+.1)
                        monsterDamage.push(5)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(5)
                        maxMonsterHealth.push(5)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
                loadPart=false
            }
        }
        if (worldPart===2){
            if (loadPart) {
                forestDiscovered[1]=true
                eagleSpawn=true
                storeThere=false
                eagleMaxCoolDown=2000
                currentCheckPoint=-1
                brickArray.push(createImage(brick.src,0,350,20,20))
                brickArray.push(createImage(brick.src,20,350,20,20))
                checkPointArray.push(createImage(checkPoint.src,10,325,25,25))

                brickArray.push(createImage(brick.src,0,370,20,20))
                brickArray.push(createImage(brick.src,0,390,20,20))
                brickArray.push(createImage(brick.src,0,410,20,20))
                brickArray.push(createImage(brick.src,0,430,20,20))
                brickArray.push(createImage(brick.src,0,450,20,20))

                brickArray.push(createImage(brick.src,170,330,20,20))

                brickArray.push(createImage(brick.src,150,230,20,20))
                brickArray.push(createImage(brick.src,150,250,20,20))
                brickArray.push(createImage(brick.src,150,270,20,20))
                brickArray.push(createImage(brick.src,150,290,20,20))
                brickArray.push(createImage(brick.src,150,310,20,20))
                brickArray.push(createImage(brick.src,150,330,20,20))
                brickArray.push(createImage(brick.src,150,350,20,20))
                brickArray.push(createImage(brick.src,150,370,20,20))

                brickArray.push(createImage(brick.src,230,390,20,20))


                brickArray.push(createImage(brick.src,250,170,20,20))
                brickArray.push(createImage(brick.src,250,190,20,20))
                brickArray.push(createImage(brick.src,250,210,20,20))
                brickArray.push(createImage(brick.src,250,230,20,20))
                brickArray.push(createImage(brick.src,250,250,20,20))
                brickArray.push(createImage(brick.src,250,270,20,20))
                brickArray.push(createImage(brick.src,250,290,20,20))
                brickArray.push(createImage(brick.src,250,310,20,20))
                brickArray.push(createImage(brick.src,250,330,20,20))
                brickArray.push(createImage(brick.src,250,350,20,20))
                brickArray.push(createImage(brick.src,250,370,20,20))
                brickArray.push(createImage(brick.src,250,390,20,20))
                brickArray.push(createImage(brick.src,250,410,20,20))
                brickArray.push(createImage(brick.src,250,430,20,20))
                brickArray.push(createImage(brick.src,250,450,20,20))

                brickArray.push(createImage(brick.src,230,270,20,20))

                brickArray.push(createImage(brick.src,0,80,20,20))
                brickArray.push(createImage(brick.src,0,100,20,20))
                brickArray.push(createImage(brick.src,0,120,20,20))
                brickArray.push(createImage(brick.src,0,130,20,20))
                brickArray.push(createImage(brick.src,0,150,20,20))
                brickArray.push(createImage(brick.src,0,170,20,20))
                brickArray.push(createImage(brick.src,0,190,20,20))
                brickArray.push(createImage(brick.src,20,190,20,20))
                brickArray.push(createImage(brick.src,40,190,20,20))
                brickArray.push(createImage(brick.src,60,190,20,20))

                brickArray.push(createImage(brick.src,20,130,20,20))

                brickArray.push(createImage(brick.src,120,100,20,20))
                brickArray.push(createImage(brick.src,140,100,20,20))
                brickArray.push(createImage(brick.src,160,100,20,20))
                brickArray.push(createImage(brick.src,180,100,20,20))


                brickArray.push(createImage(brick.src,400,100,20,20))
                brickArray.push(createImage(brick.src,400,120,20,20))
                brickArray.push(createImage(brick.src,400,140,20,20))
                brickArray.push(createImage(brick.src,400,160,20,20))
                brickArray.push(createImage(brick.src,400,180,20,20))
                brickArray.push(createImage(brick.src,400,200,20,20))
                brickArray.push(createImage(brick.src,400,220,20,20))
                brickArray.push(createImage(brick.src,400,240,20,20))
                brickArray.push(createImage(brick.src,400,260,20,20))
                brickArray.push(createImage(brick.src,400,280,20,20))
                brickArray.push(createImage(brick.src,400,300,20,20))
                brickArray.push(createImage(brick.src,400,320,20,20))
                brickArray.push(createImage(brick.src,400,340,20,20))
                brickArray.push(createImage(brick.src,400,360,20,20))
                brickArray.push(createImage(brick.src,400,380,20,20))


                spikeArray.push(createImage(spikes.src,270,200,70,20))
                spikeArray.push(createImage(spikes.src,330,350,70,20))

                spikeArray.push(createImage(spikes.src,500,455,30,15))
                spikeArray.push(createImage(spikes.src,640,455,30,15))
                checkPointArray.push(createImage(checkPoint.src,150,75,25,25))
                for (i=0;i<brickArray.length;i++){
                    questionBoxArray.push(createImage(questionBox.src,brickArray[i].xLoc,brickArray[i].yLoc,brickArray[i].width,brickArray[i].height))
                }
                monsterArray.push(createImage(grass1.src,500,445,30,30))
                monsterType.push(1)
                monsterArray.push(createImage(grass1.src,700,445,30,30))
                monsterType.push(1)
                monsterArray.push(createImage(grass1.src,650,445,30,30))
                monsterType.push(1)
                monsterArray.push(createImage(grass2.src,600,245,30,30))
                monsterType.push(2)
                monsterArray.push(createImage(grass2.src,700,175,30,30))
                monsterType.push(2)
                monsterArray.push(createImage(grass2.src,400,400,30,30))
                monsterType.push(2)
                for (i=0;i<monsterType.length;i++){
                    if (monsterType[i]===1){
                        monsterSpeed.push(Math.random()*.2+.1)
                        monsterDamage.push(5)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(5)
                        maxMonsterHealth.push(5)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                    if(monsterType[i]===2){
                        monsterSpeed.push(Math.random()*.2+.3)
                        monsterDamage.push(1)
                        monsterCoolDown.push(100)
                        monsterCoolDownLength.push(100)
                        monsterHealth.push(3)
                        maxMonsterHealth.push(3)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
                loadPart=false
            }
            eagleSpawner.xLoc=550
            eagleSpawner.yLoc=150
        }
        if (worldPart===3){
            if (loadPart) {
                eagleSpawn=false
                spiderSpawn=false
                templeSpawn=false
                storeThere=true
                forestDiscovered[2]=true
                currentCheckPoint=-1
                checkPointArray.push(createImage(checkPoint.src,125,445,25,25))
                brickArray.push(createImage(brick.src,250,390,20,20))
                brickArray.push(createImage(brick.src,270,390,20,20))
                brickArray.push(createImage(brick.src,290,390,20,20))
                brickArray.push(createImage(brick.src,310,390,20,20))
                brickArray.push(createImage(brick.src,330,390,20,20))
                brickArray.push(createImage(brick.src,350,390,20,20))
                brickArray.push(createImage(brick.src,370,390,20,20))

                brickArray.push(createImage(brick.src,370,370,20,20))
                brickArray.push(createImage(brick.src,370,350,20,20))
                brickArray.push(createImage(brick.src,370,330,20,20))
                brickArray.push(createImage(brick.src,370,310,20,20))
                brickArray.push(createImage(brick.src,370,290,20,20))
                brickArray.push(createImage(brick.src,370,270,20,20))
                brickArray.push(createImage(brick.src,370,250,20,20))
                brickArray.push(createImage(brick.src,370,230,20,20))
                brickArray.push(createImage(brick.src,370,210,20,20))
                brickArray.push(createImage(brick.src,370,190,20,20))
                brickArray.push(createImage(brick.src,370,170,20,20))

                brickArray.push(createImage(brick.src,250,290,20,20))
                brickArray.push(createImage(brick.src,250,270,20,20))
                brickArray.push(createImage(brick.src,250,250,20,20))
                brickArray.push(createImage(brick.src,250,230,20,20))
                brickArray.push(createImage(brick.src,250,210,20,20))
                brickArray.push(createImage(brick.src,250,190,20,20))
                brickArray.push(createImage(brick.src,250,170,20,20))
                brickArray.push(createImage(brick.src,250,150,20,20))
                brickArray.push(createImage(brick.src,250,130,20,20))
                brickArray.push(createImage(brick.src,250,110,20,20))
                brickArray.push(createImage(brick.src,250,90,20,20))

                brickArray.push(createImage(brick.src,350,310,20,20))
                brickArray.push(createImage(brick.src,270,250,20,20))
                brickArray.push(createImage(brick.src,350,200,20,20))

                brickArray.push(createImage(brick.src,390,170,20,20))
                brickArray.push(createImage(brick.src,410,170,20,20))
                brickArray.push(createImage(brick.src,430,170,20,20))
                brickArray.push(createImage(brick.src,450,170,20,20))
                brickArray.push(createImage(brick.src,470,170,20,20))
                brickArray.push(createImage(brick.src,490,170,20,20))
                brickArray.push(createImage(brick.src,510,170,20,20))

                brickArray.push(createImage(brick.src,600,250,20,20))
                brickArray.push(createImage(brick.src,620,250,20,20))
                brickArray.push(createImage(brick.src,640,250,20,20))
                brickArray.push(createImage(brick.src,660,250,20,20))
                brickArray.push(createImage(brick.src,680,250,20,20))
                brickArray.push(createImage(brick.src,700,250,20,20))
                brickArray.push(createImage(brick.src,720,250,20,20))
                brickArray.push(createImage(brick.src,740,250,20,20))
                brickArray.push(createImage(brick.src,760,250,20,20))
                brickArray.push(createImage(brick.src,780,250,20,20))

                for (i=0;i<brickArray.length;i++){
                    questionBoxArray.push(createImage(questionBox.src,brickArray[i].xLoc,brickArray[i].yLoc,brickArray[i].width,brickArray[i].height))
                }
                loadPart=false
            }
            store.xLoc=300
            store.yLoc=425
            activatorPillar.xLoc=650
            activatorPillar.yLoc=223
            teleporterOff1.xLoc=450
            teleporterOff1.yLoc=465
            teleporterOn1.xLoc=450
            teleporterOn1.yLoc=465
            teleporterOff2.xLoc=605
            teleporterOff2.yLoc=243
            teleporterOn2.xLoc=605
            teleporterOn2.yLoc=243
            ctx.drawImage(caveEntr,caveEntr.xLoc,caveEntr.yLoc,caveEntr.width,caveEntr.height)
            ctx.drawImage(minerNpc,minerNpc.xLoc,minerNpc.yLoc,minerNpc.width,minerNpc.height)
            if (collide(minerNpc,main)){
                ctx.fillStyle = "#000000";
                ctx.font="20px brush script MT";
                ctx.fillText("Click H to talk to miner",440,420);
            }
            if (minerTalked && collide(main,caveEntr)){
                ctx.fillStyle = "#000000";
                ctx.font="30px brush script MT";
                ctx.fillText("Click E to enter cave",400,400);
            }
        }
        if (worldPart===4){
            if (loadPart) {
                loadPart = false
                eagleSpawn = false
                spiderSpawn = false
                templeSpawn=true
                storeThere = false
                forestDiscovered[3] = true
                currentCheckPoint = -1
                brickArray.push(createImage(brick.src, 0, 250, 20, 20))
                brickArray.push(createImage(brick.src, 20, 250, 20, 20))
                brickArray.push(createImage(brick.src, 40, 250, 20, 20))
                brickArray.push(createImage(brick.src, 60, 250, 20, 20))
                brickArray.push(createImage(brick.src, 80, 250, 20, 20))
                brickArray.push(createImage(brick.src, 100, 250, 20, 20))
                brickArray.push(createImage(brick.src, 120, 250, 20, 20))
                brickArray.push(createImage(brick.src, 140, 250, 20, 20))
                brickArray.push(createImage(brick.src, 160, 250, 20, 20))
                brickArray.push(createImage(brick.src, 180, 250, 20, 20))
                brickArray.push(createImage(brick.src, 200, 250, 20, 20))
                brickArray.push(createImage(brick.src, 220, 250, 20, 20))
                brickArray.push(createImage(brick.src, 240, 250, 20, 20))
                brickArray.push(createImage(brick.src, 260, 250, 20, 20))
                brickArray.push(createImage(brick.src, 280, 250, 20, 20))
                brickArray.push(createImage(brick.src, 300, 250, 20, 20))
                brickArray.push(createImage(brick.src, 320, 250, 20, 20))
                brickArray.push(createImage(brick.src, 340, 250, 20, 20))
                brickArray.push(createImage(brick.src, 360, 250, 20, 20))
                brickArray.push(createImage(brick.src, 380, 250, 20, 20))
                brickArray.push(createImage(brick.src, 400, 250, 20, 20))
                brickArray.push(createImage(brick.src, 420, 250, 20, 20))
                brickArray.push(createImage(brick.src, 440, 250, 20, 20))
                brickArray.push(createImage(brick.src, 460, 250, 20, 20))
                brickArray.push(createImage(brick.src, 480, 250, 20, 20))
                brickArray.push(createImage(brick.src, 500, 250, 20, 20))
                brickArray.push(createImage(brick.src, 520, 250, 20, 20))
                brickArray.push(createImage(brick.src, 540, 250, 20, 20))
                brickArray.push(createImage(brick.src, 560, 250, 20, 20))
                brickArray.push(createImage(brick.src, 580, 250, 20, 20))
                brickArray.push(createImage(brick.src, 600, 250, 20, 20))
                brickArray.push(createImage(brick.src, 620, 250, 20, 20))
                brickArray.push(createImage(brick.src, 640, 250, 20, 20))
                brickArray.push(createImage(brick.src, 660, 250, 20, 20))
                brickArray.push(createImage(brick.src, 680, 250, 20, 20))
                brickArray.push(createImage(brick.src, 700, 250, 20, 20))
                brickArray.push(createImage(brick.src, 720, 250, 20, 20))
                brickArray.push(createImage(brick.src, 740, 250, 20, 20))
                brickArray.push(createImage(brick.src, 760, 250, 20, 20))
                brickArray.push(createImage(brick.src, 780, 250, 20, 20))
                monsterArray.push(createImage(castle1.src,400,200,50,50))
                monsterType.push(7)
                monsterArray.push(createImage(castle2.src,500,210,40,40))
                monsterType.push(8)
                monsterArray.push(createImage(castle1.src,600,200,50,50))
                monsterType.push(7)
                for (i=0;i<monsterType.length;i++){
                    if (monsterType[i]===7){
                        monsterSpeed.push(Math.random()*.2+.1)
                        monsterDamage.push(20)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(100)
                        maxMonsterHealth.push(100)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                    if(monsterType[i]===8){
                        monsterSpeed.push(Math.random()*.2+.4)
                        monsterDamage.push(15)
                        monsterCoolDown.push(500)
                        monsterCoolDownLength.push(500)
                        monsterHealth.push(200)
                        maxMonsterHealth.push(200)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
                for (i=0;i<brickArray.length;i++){
                    questionBoxArray.push(createImage(questionBox.src,brickArray[i].xLoc,brickArray[i].yLoc,brickArray[i].width,brickArray[i].height))
                }
            }
            ctx.drawImage(templeEntrance,templeEntrance.xLoc,templeEntrance.yLoc,templeEntrance.width,templeEntrance.height)
        }
        if (firstTime3){
            for (i=0;i<questionBoxArray.length;i++){
                specialHit.push(false)
            }
            firstTime3=false
        }
        if (firstTime2===true) {
            for (i = 0; i < brickArray.length; i++) {
                ranNum = Math.floor(Math.random() * 3)
                if (ranNum === 1) {
                    specialBrick.push(true)
                } else {
                    specialBrick.push(false)
                }
            }
            firstTime2=false
        }
    }
    if (world===3){
        ctx.drawImage(castle, castle.xLoc, castle.yLoc, castle.width, castle.height)
        if (worldPart===1){
            if (loadPart){
                loadPart=false
                loadPart = false
                eagleSpawn = false
                spiderSpawn = false
                templeSpawn=false
                storeThere = false
                castleDiscovered[0] = true
                currentCheckPoint = -1
                for (x=0;x<quests.length;x++){
                    if (quests[x]==="Find the castle"){
                        quests.splice(x,1)
                    }
                }
            }
            ctx.fillStyle="#fcfcfc";
            ctx.font="50px brush script MT";
            ctx.fillText("Part under development",200,200);
        }
    }
    //cave
    if(world===2) {
        ctx.drawImage(cave, cave.xLoc, cave.yLoc, cave.width, cave.height)
        if (worldPart === 1) {
            if (loadPart) {
                spiderSpawn = true
                storeThere = false
                caveDiscovered[0] = true
                currentCheckPoint = -1
                checkPointArray.push(createImage(checkPoint.src, 100, 445, 25, 25))
                brickArray.push(createImage(stone.src, 200, 400, 20, 20))
                brickArray.push(createImage(stone.src, 220, 400, 20, 20))
                brickArray.push(createImage(stone.src, 240, 400, 20, 20))
                brickArray.push(createImage(stone.src, 260, 400, 20, 20))
                brickArray.push(createImage(stone.src, 280, 400, 20, 20))
                brickArray.push(createImage(stone.src, 300, 400, 20, 20))

                brickArray.push(createImage(stone.src, 500, 400, 20, 20))
                brickArray.push(createImage(stone.src, 520, 400, 20, 20))
                brickArray.push(createImage(stone.src, 540, 400, 20, 20))
                brickArray.push(createImage(stone.src, 560, 400, 20, 20))
                brickArray.push(createImage(stone.src, 580, 400, 20, 20))
                brickArray.push(createImage(stone.src, 600, 400, 20, 20))

                for (i = 0; i < brickArray.length; i++) {
                    questionBoxArray.push(createImage(questionBox.src, brickArray[i].xLoc, brickArray[i].yLoc, brickArray[i].width, brickArray[i].height))
                }
                if (!spiderBossDefeated){
                    monsterArray.push(createImage(cave1.src, 500, 445, 40, 30))
                    monsterType.push(3)
                    monsterArray.push(createImage(cave1.src, 700, 445, 40, 30))
                    monsterType.push(3)
                    monsterArray.push(createImage(cave2.src, 650, 445, 30, 30))
                    monsterType.push(4)
                    monsterArray.push(createImage(cave3.src, 600, 245, 30, 30))
                    monsterType.push(5)
                }


                for (i = 0; i < monsterType.length; i++) {
                    if (monsterType[i] === 3) {
                        monsterSpeed.push(Math.random() * .2 + .1)
                        monsterDamage.push(15)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(30)
                        maxMonsterHealth.push(30)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                    if (monsterType[i] === 4) {
                        monsterSpeed.push(Math.random() * .2 + .5)
                        monsterDamage.push(5)
                        monsterCoolDown.push(50)
                        monsterCoolDownLength.push(50)
                        monsterHealth.push(10)
                        maxMonsterHealth.push(10)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                    if (monsterType[i] === 5) {
                        monsterSpeed.push(Math.random() * .05 + .05)
                        monsterDamage.push(20)
                        monsterCoolDown.push(1500)
                        monsterCoolDownLength.push(1500)
                        monsterHealth.push(1)
                        maxMonsterHealth.push(1)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
                loadPart = false
            }
            spiderSpawner.xLoc = 230
            spiderSpawner.yLoc = 300
            spiderSpawner2.xLoc = 530
            spiderSpawner2.yLoc = 300
            spiderMaxCoolDown = 2000
        }
        if (worldPart === 2) {
            if (loadPart) {
                spiderSpawn = true
                storeThere = false
                caveDiscovered[1] = true
                currentCheckPoint = -1
                loadPart = false
                checkPointArray.push(createImage(checkPoint.src, 100, 445, 25, 25))

                brickArray.push(createImage(stone.src, 390, 450, 20, 20))
                brickArray.push(createImage(stone.src, 390, 430, 20, 20))
                brickArray.push(createImage(stone.src, 390, 410, 20, 20))
                brickArray.push(createImage(stone.src, 390, 390, 20, 20))
                brickArray.push(createImage(stone.src, 390, 370, 20, 20))
                brickArray.push(createImage(stone.src, 390, 350, 20, 20))
                brickArray.push(createImage(stone.src, 390, 330, 20, 20))
                brickArray.push(createImage(stone.src, 390, 310, 20, 20))
                brickArray.push(createImage(stone.src, 390, 290, 20, 20))
                brickArray.push(createImage(stone.src, 390, 270, 20, 20))
                brickArray.push(createImage(stone.src, 390, 250, 20, 20))
                brickArray.push(createImage(stone.src, 390, 230, 20, 20))
                brickArray.push(createImage(stone.src, 390, 210, 20, 20))
                brickArray.push(createImage(stone.src, 390, 190, 20, 20))
                brickArray.push(createImage(stone.src, 390, 170, 20, 20))
                brickArray.push(createImage(stone.src, 390, 150, 20, 20))

                brickArray.push(createImage(stone.src, 370, 390, 20, 20))
                brickArray.push(createImage(stone.src, 350, 390, 20, 20))
                brickArray.push(createImage(stone.src, 330, 390, 20, 20))

                brickArray.push(createImage(stone.src, 280, 330, 20, 20))
                brickArray.push(createImage(stone.src, 260, 330, 20, 20))
                brickArray.push(createImage(stone.src, 240, 330, 20, 20))

                brickArray.push(createImage(stone.src, 190, 270, 20, 20))
                brickArray.push(createImage(stone.src, 170, 270, 20, 20))
                brickArray.push(createImage(stone.src, 150, 270, 20, 20))

                brickArray.push(createImage(stone.src, 280, 210, 20, 20))
                brickArray.push(createImage(stone.src, 260, 210, 20, 20))
                brickArray.push(createImage(stone.src, 240, 210, 20, 20))

                brickArray.push(createImage(stone.src, 370, 190, 20, 20))

                brickArray.push(createImage(stone.src, 550, 350, 20, 20))
                brickArray.push(createImage(stone.src, 550, 330, 20, 20))
                brickArray.push(createImage(stone.src, 550, 310, 20, 20))
                brickArray.push(createImage(stone.src, 550, 290, 20, 20))
                brickArray.push(createImage(stone.src, 550, 270, 20, 20))
                brickArray.push(createImage(stone.src, 550, 250, 20, 20))
                brickArray.push(createImage(stone.src, 550, 230, 20, 20))
                brickArray.push(createImage(stone.src, 550, 210, 20, 20))
                brickArray.push(createImage(stone.src, 550, 190, 20, 20))
                brickArray.push(createImage(stone.src, 550, 170, 20, 20))
                brickArray.push(createImage(stone.src, 550, 150, 20, 20))
                brickArray.push(createImage(stone.src, 550, 130, 20, 20))
                brickArray.push(createImage(stone.src, 550, 110, 20, 20))
                brickArray.push(createImage(stone.src, 550, 90, 20, 20))
                brickArray.push(createImage(stone.src, 550, 70, 20, 20))

                spikeArray.push(createImage(spikes.src, 450, 200, 70, 20))
                spikeArray.push(createImage(spikes.src, 400, 350, 60, 20))
                spikeArray.push(createImage(spikes.src, 500, 350, 60, 20))
                if (!spiderBossDefeated){
                    monsterArray.push(createImage(cave1.src, 500, 445, 40, 30))
                    monsterType.push(3)
                }
                for (i = 0; i < monsterType.length; i++) {
                    if (monsterType[i] === 3) {
                        monsterSpeed.push(Math.random() * .2 + .1)
                        monsterDamage.push(15)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(30)
                        maxMonsterHealth.push(30)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
            }
            activatorPillar.xLoc=490
            activatorPillar.yLoc=450
            teleporterOff1.xLoc=250
            teleporterOff1.yLoc=465
            teleporterOn1.xLoc=250
            teleporterOn1.yLoc=465
            teleporterOff2.xLoc=450
            teleporterOff2.yLoc=465
            teleporterOn2.xLoc=450
            teleporterOn2.yLoc=465
            spiderSpawner.xLoc = 100
            spiderSpawner.yLoc = 200
            spiderSpawner2.xLoc = 600
            spiderSpawner2.yLoc = 200
            spiderMaxCoolDown = 2000
        }
        if (worldPart === 3) {
            if (loadPart) {
                spiderSpawn = false
                storeThere = false
                caveDiscovered[2] = true
                currentCheckPoint = -1
                loadPart = false
                brickArray.push(createImage(stone.src, 200, 400, 20, 20))
                brickArray.push(createImage(stone.src, 220, 400, 20, 20))
                brickArray.push(createImage(stone.src, 240, 400, 20, 20))
                brickArray.push(createImage(stone.src, 260, 400, 20, 20))
                brickArray.push(createImage(stone.src, 280, 400, 20, 20))

                brickArray.push(createImage(stone.src, 80, 330, 20, 20))
                brickArray.push(createImage(stone.src, 100, 330, 20, 20))
                brickArray.push(createImage(stone.src, 120, 330, 20, 20))
                brickArray.push(createImage(stone.src, 140, 330, 20, 20))
                brickArray.push(createImage(stone.src, 160, 330, 20, 20))

                brickArray.push(createImage(stone.src, 320, 330, 20, 20))
                brickArray.push(createImage(stone.src, 340, 330, 20, 20))
                brickArray.push(createImage(stone.src, 360, 330, 20, 20))
                brickArray.push(createImage(stone.src, 380, 330, 20, 20))
                brickArray.push(createImage(stone.src, 400, 330, 20, 20))

                brickArray.push(createImage(stone.src, 200, 260, 20, 20))
                brickArray.push(createImage(stone.src, 220, 260, 20, 20))
                brickArray.push(createImage(stone.src, 240, 260, 20, 20))
                brickArray.push(createImage(stone.src, 260, 260, 20, 20))
                brickArray.push(createImage(stone.src, 280, 260, 20, 20))

                brickArray.push(createImage(stone.src, 80, 190, 20, 20))
                brickArray.push(createImage(stone.src, 100, 190, 20, 20))
                brickArray.push(createImage(stone.src, 120, 190, 20, 20))
                brickArray.push(createImage(stone.src, 140, 190, 20, 20))
                brickArray.push(createImage(stone.src, 160, 190, 20, 20))

                brickArray.push(createImage(stone.src, 320, 190, 20, 20))
                brickArray.push(createImage(stone.src, 340, 190, 20, 20))
                brickArray.push(createImage(stone.src, 360, 190, 20, 20))
                brickArray.push(createImage(stone.src, 380, 190, 20, 20))
                brickArray.push(createImage(stone.src, 400, 190, 20, 20))
                if (!spiderBossDefeated){
                    monsterArray.push(createImage(cave4.src, 650, 225, 100, 120))
                    monsterType.push(6)
                }
                for (i = 0; i < monsterType.length; i++) {
                    if (monsterType[i] === 6) {
                        monsterSpeed.push(0)
                        monsterDamage.push(10)
                        monsterCoolDown.push(500)
                        monsterCoolDownLength.push(500)
                        monsterHealth.push(100)
                        maxMonsterHealth.push(100)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
            }
        }
        if (firstTime3){
            for (i=0;i<questionBoxArray.length;i++){
                specialHit.push(false)
            }
            firstTime3=false
        }
        if (firstTime2===true) {
            for (i = 0; i < brickArray.length; i++) {
                ranNum = Math.floor(Math.random() * 3)
                if (ranNum === 1) {
                    specialBrick.push(true)
                } else {
                    specialBrick.push(false)
                }
            }
            firstTime2=false
        }
    }
}
function drawBricks(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<brickArray.length;i++){
        ctx.drawImage(brickArray[i],brickArray[i].xLoc,brickArray[i].yLoc,brickArray[i].width,brickArray[i].height)
        if (specialHit[i]===true){
            ctx.drawImage(questionBoxArray[i],questionBoxArray[i].xLoc,questionBoxArray[i].yLoc,questionBoxArray[i].width,questionBoxArray[i].height)
        }
    }
}

function drawSpawners(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (eagleSpawn){
        ctx.drawImage(eagleSpawner,eagleSpawner.xLoc,eagleSpawner.yLoc,eagleSpawner.width,eagleSpawner.height)
        eagleCoolDown+=1
        if (eagleCoolDown>eagleMaxCoolDown){
            eagleCoolDown=0
            ranSpawn=Math.floor(Math.random()*4)
            for (i=0;i<ranSpawn;i++){
                monsterArray.push(createImage(grass2.src,eagleSpawner.xLoc,eagleSpawner.yLoc,30,30))
                monsterType.push(2)
                monsterSpeed.push(Math.random()*.2+.3)
                monsterDamage.push(1)
                monsterCoolDown.push(100)
                monsterCoolDownLength.push(100)
                monsterHealth.push(3)
                maxMonsterHealth.push(3)
                monsterIsTouchingBrickL.push(false)
                monsterIsTouchingBrickR.push(false)
                monsterDead.push(false)
            }
        }
    }
    if (spiderSpawn && !spiderBossDefeated){
        if (spiderSpawn1Health>0){
            ctx.drawImage(spiderSpawner,spiderSpawner.xLoc,spiderSpawner.yLoc,spiderSpawner.width,spiderSpawner.height)
        }
        if (spiderSpawn2Health>0){
            ctx.drawImage(spiderSpawner2,spiderSpawner2.xLoc,spiderSpawner2.yLoc,spiderSpawner2.width,spiderSpawner2.height)
        }
        spiderCoolDown+=1
        if (spiderCoolDown>spiderMaxCoolDown){
            spiderCoolDown=0
            ranSpawn=Math.floor(Math.random()*2+1)
            ranSpawn2=Math.floor(Math.random()*2+1)
            if (spiderSpawn1Health>0){
                for (i=0;i<ranSpawn;i++){
                    ranSpawned=Math.floor(Math.random()*3)
                    if (ranSpawned===0){
                        monsterArray.push(createImage(cave1.src,spiderSpawner.xLoc,spiderSpawner.yLoc,40,30))
                        monsterType.push(3)
                        monsterSpeed.push(Math.random()*.2+.1)
                        monsterDamage.push(15)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(30)
                        maxMonsterHealth.push(30)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }else if (ranSpawned===1){
                        monsterArray.push(createImage(cave2.src,spiderSpawner.xLoc,spiderSpawner.yLoc,30,30))
                        monsterType.push(4)
                        monsterSpeed.push(Math.random()*.2+.5)
                        monsterDamage.push(5)
                        monsterCoolDown.push(50)
                        monsterCoolDownLength.push(50)
                        monsterHealth.push(10)
                        maxMonsterHealth.push(10)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }else if (ranSpawned===2){
                        monsterArray.push(createImage(cave3.src,spiderSpawner.xLoc,spiderSpawner.yLoc,30,30))
                        monsterType.push(5)
                        monsterSpeed.push(Math.random()*.05+.05)
                        monsterDamage.push(20)
                        monsterCoolDown.push(1500)
                        monsterCoolDownLength.push(1500)
                        monsterHealth.push(1)
                        maxMonsterHealth.push(1)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
            }
            if (spiderSpawn2Health>0){
                for (i=0;i<ranSpawn2;i++){
                    ranSpawned=Math.floor(Math.random()*3)
                    if (ranSpawned===0){
                        monsterArray.push(createImage(cave1.src,spiderSpawner2.xLoc,spiderSpawner2.yLoc,40,30))
                        monsterType.push(3)
                        monsterSpeed.push(Math.random()*.2+.1)
                        monsterDamage.push(15)
                        monsterCoolDown.push(1000)
                        monsterCoolDownLength.push(1000)
                        monsterHealth.push(30)
                        maxMonsterHealth.push(30)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }else if (ranSpawned===1){
                        monsterArray.push(createImage(cave2.src,spiderSpawner2.xLoc,spiderSpawner2.yLoc,30,30))
                        monsterType.push(4)
                        monsterSpeed.push(Math.random()*.2+.5)
                        monsterDamage.push(5)
                        monsterCoolDown.push(50)
                        monsterCoolDownLength.push(50)
                        monsterHealth.push(10)
                        maxMonsterHealth.push(10)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }else if (ranSpawned===2){
                        monsterArray.push(createImage(cave3.src,spiderSpawner2.xLoc,spiderSpawner2.yLoc,30,30))
                        monsterType.push(5)
                        monsterSpeed.push(Math.random()*.05+.05)
                        monsterDamage.push(20)
                        monsterCoolDown.push(1500)
                        monsterCoolDownLength.push(1500)
                        monsterHealth.push(1)
                        maxMonsterHealth.push(1)
                        monsterIsTouchingBrickL.push(false)
                        monsterIsTouchingBrickR.push(false)
                        monsterDead.push(false)
                    }
                }
            }
        }
    }
    if (templeSpawn && main.xLoc<600) {
        templeCoolDown += 1
        if (templeCoolDown > 2000) {
            templeCoolDown=0
            ranSpawned=Math.floor(Math.random()*2)
            if (ranSpawned===0){
                monsterArray.push(createImage(castle1.src,750,200,50,50))
                monsterType.push(7)
                monsterSpeed.push(Math.random()*.2+.1)
                monsterDamage.push(20)
                monsterCoolDown.push(1000)
                monsterCoolDownLength.push(1000)
                monsterHealth.push(100)
                maxMonsterHealth.push(100)
                monsterIsTouchingBrickL.push(false)
                monsterIsTouchingBrickR.push(false)
                monsterDead.push(false)
            }
            if (ranSpawned===1){
                monsterArray.push(createImage(castle2.src,750,210,40,40))
                monsterType.push(8)
                monsterSpeed.push(Math.random()*.2+.4)
                monsterDamage.push(15)
                monsterCoolDown.push(500)
                monsterCoolDownLength.push(500)
                monsterHealth.push(200)
                maxMonsterHealth.push(200)
                monsterIsTouchingBrickL.push(false)
                monsterIsTouchingBrickR.push(false)
                monsterDead.push(false)
            }
        }
    }
}
function drawSpikes(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<spikeArray.length;i++){
        ctx.drawImage(spikeArray[i],spikeArray[i].xLoc,spikeArray[i].yLoc,spikeArray[i].width,spikeArray[i].height)
    }
}
function showNotifications(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (notifications.length>0){
        notificationTime+=1
        for (i=0;i<notifications.length;i++){
            ctx.font="30px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("+"+notifications[i],650,50+(i+1)*30);
        }
        if (notificationTime>200){
            notificationTime=0
            notifications.shift()
        }
    }
}
function drawMonster(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<monsterArray.length;i++){
        if (monsterHealth[i]>0){
            ctx.drawImage(monsterArray[i],monsterArray[i].xLoc,monsterArray[i].yLoc,monsterArray[i].width,monsterArray[i].height)
        }
    }

}
function moveMonster(){
    for (i=0;i<monsterArray.length;i++){
        if (monsterArray[i].xLoc>main.xLoc && !monsterIsTouchingBrickL[i] && monsterType[i]!==5 && monsterType[i]!==2 && monsterType[i]!==7 && monsterType[i]!==8){
            monsterArray[i].xLoc-=monsterSpeed[i]
        }
        else if(monsterArray[i].xLoc<main.xLoc && !monsterIsTouchingBrickR[i] && monsterType[i]!==5 && monsterType[i]!==2){
            monsterArray[i].xLoc+=monsterSpeed[i]
        }
        if (monsterArray[i].xLoc>main.xLoc && monsterType[i]!==5 && (monsterType[i]===7 || monsterType[i]===8)){
            monsterArray[i].xLoc-=monsterSpeed[i]
        }
        else if(monsterArray[i].xLoc<main.xLoc && (monsterType[i]===7 || monsterType[i]===8)){
            monsterArray[i].xLoc+=monsterSpeed[i]
        }
        if (monsterArray[i].xLoc>main.xLoc+100 && !monsterIsTouchingBrickL[i] && monsterType[i]===5){
            monsterArray[i].xLoc-=monsterSpeed[i]
        }
        else if(monsterArray[i].xLoc<main.xLoc-100 && !monsterIsTouchingBrickR[i] && monsterType[i]===5){
            monsterArray[i].xLoc+=monsterSpeed[i]
        }
        if (monsterArray[i].xLoc>main.xLoc && monsterType[i]===2){
            monsterArray[i].xLoc-=monsterSpeed[i]
        }
        else if(monsterArray[i].xLoc<main.xLoc && monsterType[i]===2){
            monsterArray[i].xLoc+=monsterSpeed[i]
        }
        if (monsterType[i]===2 || monsterType[i]===4){
            if(monsterArray[i].yLoc>main.yLoc){
                monsterArray[i].yLoc-=monsterSpeed[i]
            }
            if (monsterArray[i].yLoc<main.yLoc) {
                monsterArray[i].yLoc += monsterSpeed[i]
            }
            if (monsterArray[i].yLoc===main.yLoc){
                monsterArray[i].yLoc+=Math.random()*4
            }
        }else if (monsterType[i]===5){
            if(monsterArray[i].yLoc>main.yLoc + 100){
                monsterArray[i].yLoc-=Math.random()*monsterSpeed[i]
            }
            if (monsterArray[i].yLoc<main.yLoc - 100) {
                monsterArray[i].yLoc += Math.random() * monsterSpeed[i]
            }

        } else if (monsterType[i]===7 || monsterType[i]===8){
            if (!monsterIsTouchingBrickL[i] && !monsterIsTouchingBrickR[i] && monsterArray[i].yLoc<470-monsterArray[i].height){
                monsterArray[i].yLoc+=monsterSpeed[i]
            }
        }else{
            if (monsterArray[i].yLoc<470-monsterArray[i].height){
                monsterArray[i].yLoc+=monsterSpeed[i]
            }
        }
    }
}
function drawCheckPoints(){
    var ctx = document.getElementById("myCanvas").getContext("2d");

    for (i=0;i<checkPointArray.length;i++){
        ctx.drawImage(checkPointArray[i],checkPointArray[i].xLoc,checkPointArray[i].yLoc,checkPointArray[i].width,checkPointArray[i].height)
    }
    if (currentCheckPoint>=0){
        ctx.drawImage(checkPointB,checkPointArray[currentCheckPoint].xLoc,checkPointArray[currentCheckPoint].yLoc,checkPointArray[currentCheckPoint].width,checkPointArray[currentCheckPoint].height)
    }
}
function monsterHealthBar(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<monsterArray.length;i++) {
        if (monsterHealth[i] > 0 && monsterType[i]!==6) {
            ctx.fillStyle = "#000000"
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 5, 30, 5)
            ctx.border = "#000000"
            ctx.strokeRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 5, 30, 5)
            ctx.fillStyle = "#14c900"
            if (monsterHealth[i] < 0) {
                monsterHealth[i] = 0
            }
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 5, monsterHealth[i] / maxMonsterHealth[i] * 30, 5)
        }else if (monsterHealth[i] > 0 && monsterType[i]===6){
            ctx.fillStyle = "#000000"
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 15, 100, 10)
            ctx.border = "#000000"
            ctx.strokeRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 15, 100, 10)
            ctx.fillStyle = "#14c900"
            if (monsterHealth[i] < 0) {
                monsterHealth[i] = 0
            }
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc - 15, monsterHealth[i] / maxMonsterHealth[i] * 100, 10)
        }
    }
}
function monsterReloadBar(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<monsterArray.length;i++){
        if (monsterHealth[i]>0 && monsterType[i]!==6){
            ctx.fillStyle="#000000";
            ctx.fillRect(monsterArray[i].xLoc,monsterArray[i].yLoc-10,30,5)
            ctx.fillStyle="#00ffff"
            ctx.border="#000000"
            ctx.strokeRect(monsterArray[i].xLoc, monsterArray[i].yLoc-10,30,5)
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc-10, monsterCoolDown[i]/monsterCoolDownLength[i]*30, 5)
        }else if (monsterHealth[i]>0 && monsterType[i]===6){
            ctx.fillStyle="#000000";
            ctx.fillRect(monsterArray[i].xLoc,monsterArray[i].yLoc-25,100,10)
            ctx.fillStyle="#00ffff"
            ctx.border="#000000"
            ctx.strokeRect(monsterArray[i].xLoc, monsterArray[i].yLoc-25,100,10)
            ctx.fillRect(monsterArray[i].xLoc, monsterArray[i].yLoc-25, monsterCoolDown[i]/monsterCoolDownLength[i]*100, 10)
        }
    }
}
function damageMonster() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i = 0; i < monsterArray.length; i++) {
        if (collide(monsterArray[i], main) && monsterHealth[i] > 0 && monsterType[i] !== 5) {
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                playerHealth -= monsterDamage[i]
                monsterCoolDown[i] = 0
            }
        }
        if (monsterType[i] === 5 && monsterHealth[i]>0) {
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                x2 = main.xLoc - (monsterArray[i].xLoc +10)
                y2 = main.yLoc - (monsterArray[i].yLoc + monsterArray[i].height)
                if (x2<0) {
                    monsterPath.push(-y2/x2)
                } else {
                    monsterPath.push(y2/x2)
                }
                monsterX.push(x2)
                MonSpikeArray.push(createImage(spike.src, monsterArray[i].xLoc +10, monsterArray[i].yLoc + monsterArray[i].height, 20, 13))
                monsterCoolDown[i] = 0
            }
        }
        if (monsterType[i]===6 && monsterHealth[i]>0 && spiderBossSpikeAttacks<5){
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                x2 = main.xLoc - (monsterArray[i].xLoc +50)
                y2 = main.yLoc - (monsterArray[i].yLoc + monsterArray[i].height)
                if (x2<0) {
                    monsterPath.push(-y2/x2)
                } else {
                    monsterPath.push(y2/x2)
                }
                monsterX.push(x2)
                MonSpikeArray.push(createImage(spike.src, monsterArray[i].xLoc +50, monsterArray[i].yLoc + monsterArray[i].height, 40, 23))
                monsterCoolDown[i] = 0
                spiderBossSpikeAttacks+=1
            }
        }
        if (monsterType[i]===6 && monsterHealth[i]>0 && spiderBossSpikeAttacks>=5 && spiderBossSpikeAttacks<8){
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                for (x = 0; x < 8; x++) {
                    monsterPath.push(0)
                    monsterX.push(-1)
                    neg=Math.floor(Math.random()*2)
                    if (neg===0){
                        vari=Math.round(Math.random()*20)*-1
                    }else{
                        vari=Math.round(Math.random()*20)
                    }
                    MonSpikeArray.push(createImage(spike.src, monsterArray[i].xLoc, x * 70 + 100 +vari, 23, 13))
                }
                spiderBossSpikeAttacks += 1
                monsterCoolDown[i] = 0
            }
        }
        if (monsterType[i]===6 && monsterHealth[i]>0 && spiderBossSpikeAttacks>=8 && spiderBossSpikeAttacks<13){
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                hole=Math.round(Math.random()*300+150)
                for (x = 0; x < 20; x++) {
                    monsterPath.push(0)
                    monsterX.push(-1)
                    if (x*20 +100>hole+50 || x* 20 +100<hole-50){
                        MonSpikeArray.push(createImage(spike.src, monsterArray[i].xLoc, x * 20 + 100, 23, 13))
                    }
                }
                spiderBossSpikeAttacks += 1
                monsterCoolDown[i] = 0
            }
        }
        if (monsterType[i]===6 && monsterHealth[i]>0 && spiderBossSpikeAttacks===13){
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                greenApple.xLoc=Math.round(Math.random()*200+100)
                rand=Math.round(Math.random()*6)
                greenApple.yLoc=rand*50+150
                spiderBossSpikeAttacks += 1
                monsterCoolDown[i] = 0
            }
        }
        ctx.drawImage(greenApple,greenApple.xLoc,greenApple.yLoc,greenApple.width,greenApple.height)
        ctx.drawImage(spiderHeart,spiderHeart.xLoc,spiderHeart.yLoc,spiderHeart.width,spiderHeart.height)
        ctx.drawImage(spiderHeart2,spiderHeart2.xLoc,spiderHeart2.yLoc,spiderHeart2.width,spiderHeart2.height)
        ctx.drawImage(spiderHeart3,spiderHeart3.xLoc,spiderHeart3.yLoc,spiderHeart3.width,spiderHeart3.height)
        if (monsterType[i]===6 && spiderBossSpikeAttacks===14 && monsterHealth[i]>0){
            if (monsterCoolDown[i] === monsterCoolDownLength[i]) {
                spiderHeart.xLoc=Math.round(Math.random()*200+100)
                rand=Math.round(Math.random()*6)
                spiderHeart.yLoc=rand*50+150
                spiderHeart2.xLoc=Math.round(Math.random()*200+100)
                rand=Math.round(Math.random()*6)
                spiderHeart2.yLoc=rand*50+150
                spiderHeart3.xLoc=Math.round(Math.random()*300+100)
                rand=Math.round(Math.random()*6)
                spiderHeart3.yLoc=rand*50+150
                spiderBossSpikeAttacks += 1
                monsterCoolDown[i] = 0
            }
        }
        if (collide(main,greenApple)){
            greenApple.xLoc=-100
            greenApple.yLoc=-100
            playerHealth+=40
            if (playerHealth>100){
                playerHealth=100
            }
        }
        if (swordSide===1 || swordSide===3){
            if (collide(swordsR[currentSword],spiderHeart) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart.xLoc=-100
                spiderHeart.yLoc=-100
            }
            if (collide(swordsR[currentSword],spiderHeart2) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart2.xLoc=-100
                spiderHeart2.yLoc=-100
            }
            if (collide(swordsR[currentSword],spiderHeart3) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart3.xLoc=-100
                spiderHeart3.yLoc=-100
            }
        }
        if (swordSide===2){
            if (collide(swordsL[currentSword],spiderHeart) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart.xLoc=-100
                spiderHeart.yLoc=-100
            }
            if (collide(swordsL[currentSword],spiderHeart2) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart2.xLoc=-100
                spiderHeart2.yLoc=-100
            }
            if (collide(swordsL[currentSword],spiderHeart3) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart3.xLoc=-100
                spiderHeart3.yLoc=-100
            }
        }
        if (swordSide===4){
            if (collide(swordsD[currentSword],spiderHeart) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart.xLoc=-100
                spiderHeart.yLoc=-100
            }
            if (collide(swordsD[currentSword],spiderHeart2) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart2.xLoc=-100
                spiderHeart2.yLoc=-100
            }
            if (collide(swordsD[currentSword],spiderHeart3) && attackCoolDown >= swordCoolDown){
                if (monsterType[i]===6){
                    monsterHealth[i]-=20
                }
                attackCoolDown=0
                spiderHeart3.xLoc=-100
                spiderHeart3.yLoc=-100
            }
        }
        if (monsterType[i]===6 && spiderBossSpikeAttacks>14 && monsterHealth[i]>0 && spiderBossSpikeAttacks<16){
            spiderBossSpikeAttacks += 1
            monsterCoolDown[i] = 0
        }
        if (spiderBossSpikeAttacks===16 && monsterType[i]===6){
            spiderBossSpikeAttacks=0
            monsterCoolDown[i] = 0
            MonSpikeArray=[]
            monsterPath=[]
            monsterX=[]
        }
        if (monsterHealth[i]<=0 && monsterType[i]===6){
            for (x=0;x<quests.length;x++){
                if (quests[x]==="Clear the cave"){
                    quests.splice(x,1)
                }
            }
            spiderBossDefeated=true
            spiderHeart.xLoc=-100
            spiderHeart.yLoc=-100
            spiderHeart2.xLoc=-100
            spiderHeart2.yLoc=-100
            spiderHeart3.xLoc=-100
            spiderHeart3.yLoc=-100
        }
    }
    for (i = 0; i < MonSpikeArray.length; i++) {
        MonSpikeArray[i].yLoc += monsterPath[i]
        if (monsterX[i] >= 0) {
            MonSpikeArray[i].xLoc += 1
        } else if (monsterX[i] < 0) {
            MonSpikeArray[i].xLoc -= 1
        }
        if (collide(MonSpikeArray[i], main)) {
            playerHealth -= 20
            MonSpikeArray.splice(i,1)
            monsterPath.splice(i,1)
            monsterX.splice(i,1)
        }
        if (MonSpikeArray[i].xLoc > 800 || MonSpikeArray[i].yLoc > 500 || MonSpikeArray[i].yLoc < 0 || MonSpikeArray[i].xLoc < 0) {
            MonSpikeArray.splice(i,1)
            monsterPath.splice(i,1)
            monsterX.splice(i,1)
        }
        ctx.drawImage(MonSpikeArray[i], MonSpikeArray[i].xLoc, MonSpikeArray[i].yLoc,MonSpikeArray[i].width, MonSpikeArray[i].height)
    }
}
function coolDownMonster(){
    for (i=0;i<monsterArray.length;i++) {
        if (monsterCoolDown[i]<monsterCoolDownLength[i]){
            monsterCoolDown[i]+=1
        }
    }
}
function drawSword(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (SwordEquipped===true){
        if (swordSide===1){
            swordsR[currentSword].yLoc=main.yLoc
            swordsR[currentSword].xLoc=main.xLoc+28
            ctx.drawImage(swordsR[currentSword],swordsR[currentSword].xLoc,swordsR[currentSword].yLoc,swordsR[currentSword].width,swordsR[currentSword].height)
        }
        if (swordSide===3){
            swordsR[currentSword].yLoc=main.yLoc-swordsR[currentSword].height
            swordsR[currentSword].xLoc=main.xLoc+10
            ctx.drawImage(swordsR[currentSword],swordsR[currentSword].xLoc,swordsR[currentSword].yLoc,swordsR[currentSword].width,swordsR[currentSword].height)
        }
        if (swordSide===2){
            swordsL[currentSword].yLoc=main.yLoc
            swordsL[currentSword].xLoc=main.xLoc-20
            ctx.drawImage(swordsL[currentSword],swordsL[currentSword].xLoc,swordsL[currentSword].yLoc,swordsL[currentSword].width,swordsL[currentSword].height)
        }
        if (swordSide===4){
            swordsD[currentSword].yLoc=main.yLoc+main.height
            swordsD[currentSword].xLoc=main.xLoc+10
            ctx.drawImage(swordsD[currentSword],swordsD[currentSword].xLoc,swordsD[currentSword].yLoc,swordsD[currentSword].width,swordsD[currentSword].height)
        }
    }
}
function damageSword(){
    if (loadSword===true){
        if (currentSword===0){
            swordDamage=2
            swordCoolDown=200
            attackCoolDown=0
        }
        if (currentSword===1){
            swordDamage=5
            swordCoolDown=200
            attackCoolDown=0
        }
        if (currentSword===2){
            swordDamage=10
            swordCoolDown=300
            attackCoolDown=0
        }
        if (currentSword===3){
            swordDamage=10
            swordCoolDown=200
            attackCoolDown=0
        }
        if (currentSword===4){
            swordDamage=30
            swordCoolDown=400
            attackCoolDown=0
        }
        if (currentSword===5){
            swordDamage=40
            swordCoolDown=400
            attackCoolDown=0
        }
        if (currentSword===6){
            swordDamage=30
            swordCoolDown=200
            attackCoolDown=0
        }
        loadSword=false
    }
    if (attackCoolDown<swordCoolDown){
        attackCoolDown+=1
    }

    if (swordSide===1 || swordSide===3){
        if (collide(swordsR[currentSword],spiderSpawner) && spiderSpawn1Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn1Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }
    if (swordSide===2){
        if (collide(swordsL[currentSword],spiderSpawner)  && spiderSpawn1Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn1Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }
    if(swordSide===4){
        if (collide(swordsD[currentSword],spiderSpawner) && spiderSpawn1Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn1Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }

    if (swordSide===1 || swordSide===3){
        if (collide(swordsR[currentSword],spiderSpawner2) && spiderSpawn2Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn2Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }
    if (swordSide===2){
        if (collide(swordsL[currentSword],spiderSpawner2)  && spiderSpawn2Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn2Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }
    if(swordSide===4){
        if (collide(swordsD[currentSword],spiderSpawner2) && spiderSpawn2Health>0 && SwordEquipped===true) {
            if (attackCoolDown >= swordCoolDown) {
                spiderSpawn2Health -= swordDamage
                attackCoolDown = 0
                loadSword=true
            }
        }
    }
    for (i=0;i<monsterArray.length;i++) {
        if (swordSide===1 || swordSide===3){
            if (collide(swordsR[currentSword],monsterArray[i]) && monsterHealth[i]>0 && SwordEquipped===true) {
                if (attackCoolDown >= swordCoolDown) {
                    monsterHealth[i] -= swordDamage
                    attackCoolDown = 0
                    loadSword=true
                }
            }
        }
        if (swordSide===2){
            if (collide(swordsL[currentSword],monsterArray[i])  && monsterHealth[i]>0 && SwordEquipped===true) {
                if (attackCoolDown >= swordCoolDown) {
                    monsterHealth[i] -= swordDamage
                    attackCoolDown = 0
                    loadSword=true
                }
            }
        }
        if(swordSide===4){
            if (collide(swordsD[currentSword],monsterArray[i]) && monsterHealth[i]>0 && SwordEquipped===true) {
                if (attackCoolDown >= swordCoolDown) {
                    monsterHealth[i] -= swordDamage
                    attackCoolDown = 0
                    loadSword=true
                }
            }
        }
    }
}
function createMain(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(main,main.xLoc,main.yLoc,main.width,main.height)
}
function createSide(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(side,side.xLoc,side.yLoc,side.width,side.height)
}
function sideAttack(){
    rightSide+=1
    leftSide+=1
    if (loadSide){
        arrowCoolDown=0
        arrowCoolDownMax=500
        loadSide=false
        sideCheck=0
    }
    if (monsterArray.length>0) {
        for (i = 0; i < monsterArray.length; i++) {
            if (monsterHealth[i] > 0) {
                if (side.xLoc + side.width + rightSide > monsterArray[i].xLoc && side.xLoc + rightSide < monsterArray[i].xLoc + monsterArray[i].width && closestFound === false) {
                    closestFound = true
                    closestMonster = i
                }
                if (side.xLoc - leftSide < monsterArray[i].xLoc + monsterArray[i].width && side.xLoc + side.width - leftSide > monsterArray[i].xLoc && closestFound === false) {
                    closestFound = true
                    closestMonster = i
                }
            }
        }
    }

    if (arrowCoolDown<arrowCoolDownMax){
        arrowCoolDown+=1
    }
    if (closestFound && arrowCoolDown===arrowCoolDownMax && shoot===true){
        x=monsterArray[closestMonster].xLoc-side.xLoc+side.width
        y=monsterArray[closestMonster].yLoc-side.yLoc
        if (x===0){
            x=.001
        }
        if (x<0){
            arrowPath.push(-y/x)
        }else {
            arrowPath.push(y/x)
        }

        arrowX.push(x)
        if (x>=0){
            arrowArray.push(createImage(arrowR[currentArrow].src,side.xLoc+side.width,side.yLoc,25,7))
        }else{
            arrowArray.push(createImage(arrowL[currentArrow].src,side.xLoc,side.yLoc,25,7))
        }
        arrowCoolDown=0
        closestFound=false
        closestMonster=-1
        rightSide=0
        leftSide=0
        shoot=false
    }
}
function shootArrow(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for (i=0;i<arrowArray.length;i++){
        arrowBelow=false
        if (arrowPath[i]>10 || arrowPath[i]<-10){
            arrowPath[i]=arrowPath/3
            arrowBelow=true
        }
        arrowArray[i].yLoc+=arrowPath[i]
        if (currentArrow===0){
            arrowDamage=1
        }
        if (currentArrow===1){
            arrowDamage=5
        }
        if (currentArrow===2){
            arrowDamage=10
        }
        if (currentArrow===3){
            arrowDamage=15
        }
        if(arrowBelow){
            arrowArray[i].xLoc+=0
        }
        else if (arrowX[i]>=0 && !arrowBelow){
            arrowArray[i].xLoc+=1
        }
        else if (arrowX[i]<0 && !arrowBelow){
            arrowArray[i].xLoc-=1
        }

        for (x=0;x<monsterArray.length;x++) {
            if (collide(arrowArray[i],monsterArray[x]) && monsterHealth[x] > 0) {
                monsterHealth[x] -= arrowDamage
                arrowArray.splice(i,1)
                arrowPath.splice(i,1)
                arrowX.splice(i,1)
                continueIntro=true
            }
        }
        if (arrowArray[i].xLoc>800 || arrowArray.yLoc>500 || arrowArray.yLoc<0 || arrowArray.xLoc<0){
            arrowArray.splice(i,1)
            arrowPath.splice(i,1)
            arrowX.splice(i,1)
        }
        ctx.drawImage(arrowArray[i],arrowArray[i].xLoc,arrowArray[i].yLoc,arrowArray[i].width,arrowArray[i].height)

    }
}
function sideFollow(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(!portalGunVisible){
        if (main.xLoc>side.xLoc+side.width+100){
            side.xLoc+=.3
            sideMoved=true
        }
        if (main.xLoc+main.width<side.xLoc-100){
            side.xLoc-=.3
            sideMoved=true
        }
    }
    if (sideCheck<1000){
        sideCheck+=1
    }
    if (sideCheck===1000 && isTouchingBrick){
        teleportAvailabe=true
    }
    if (teleportAvailabe){
        if (main.yLoc<side.yLoc){
            portalGun.xLoc=side.xLoc+side.width
            portalGun.yLoc=side.yLoc+10
            if (!secondPortalLoad){
                portalX=main.xLoc
                portalY=main.yLoc
                portalPath=(side.yLoc-portalY)/(side.xLoc-portalX)
                if (side.xLoc<main.xLoc){
                    portalPath=portalPath*-1
                }
                secondPortalLoad=true
            }
            ctx.drawImage(portalGun,portalGun.xLoc,portalGun.yLoc,portalGun.width,portalGun.height)
            portalGunVisible=true
        }
    }
    if (portalGunVisible){
        if(sideLoad<300){
            sideLoad+=1
        }
        if(sideLoad===300){
            if (!firstPortalLoad){
                portalOrb.xLoc=side.xLoc+side.width
                portalOrb.yLoc=side.yLoc
                firstPortalLoad=true
            }
            portalOrbVisible=true
        }
    }
    if (portalOrbVisible){
        if (portalX>side.xLoc){
            portalOrb.xLoc+=1
        }
        else if (portalX<side.xLoc){
            portalOrb.xLoc-=1
        }
        portalOrb.yLoc-=portalPath
        ctx.drawImage(portalOrb,portalOrb.xLoc,portalOrb.yLoc,portalOrb.width,portalOrb.height)
    }
    if(portalOrb.xLoc + portalOrb.width > portalX && portalOrb.xLoc < portalX + main.width && portalOrb.yLoc + portalOrb.height > portalY && portalOrb.yLoc < portalY + main.height){
        side.xLoc=portalX
        side.yLoc=portalY
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        teleportAvailabe=false
        ctx.drawImage(portalGun,portalGun.xLoc,portalGun.yLoc,portalGun.width,portalGun.height)
        ctx.drawImage(portalOrb,portalOrb.xLoc,portalOrb.yLoc,portalOrb.width,portalOrb.height)
    }
}
function sideReloadBar(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#000000";
    ctx.fillRect(side.xLoc,side.yLoc-5,30,5)
    ctx.fillStyle="#00ffff"
    ctx.border="#000000"
    ctx.strokeRect(side.xLoc, side.yLoc-5,30,5)
    ctx.fillRect(side.xLoc, side.yLoc-5, arrowCoolDown/arrowCoolDownMax*30, 5)
}


function CoinText(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="40px brush script MT";
    ctx.fillStyle="#000000";
    ctx.fillText("Coins:"+ inventory[0],670,40);
}
function healthText(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font="40px brush script MT";
    ctx.fillStyle="#000000";
    ctx.fillText("Health:",10,40);

    ctx.fillRect(115,15,100,30)
    if (playerHealth>85){
        ctx.fillStyle="#14c900"
    }
    else if (playerHealth<=85 && playerHealth>70){
        ctx.fillStyle="#9aaf27"
    }
    else if(playerHealth<=70 && playerHealth>55){
        ctx.fillStyle="#faf500"
    }
    else if (playerHealth<=55 && playerHealth>35){
        ctx.fillStyle="#ffb400"
    }
    else if (playerHealth<=35 && playerHealth>20){
        ctx.fillStyle="#ff7500"
    }
    else if (playerHealth<=20){
        ctx.fillStyle="#fd0202"
    }
    ctx.border="#000000"
    ctx.strokeRect(115, 15,100,30)
    if (playerHealth<0){
        playerHealth=0
    }
    ctx.fillRect(115, 15, playerHealth, 30)
    ctx.fillStyle="#153ade"
    ctx.fillRect(115,15,playerShield,30)

}
function bigAttack(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (largeAttack===true && canUseWind===true){
        if (currentPower===0){
            ctx.fillStyle="rgba(250,249,249,0.71)"
            windAttack+=1
            if (swordSide===1){
                ctx.fillRect(main.xLoc+30,main.yLoc, windAttack, 30)
                for (i=0;i<monsterArray.length;i++) {
                    if (main.xLoc + main.width + windAttack > monsterArray[i].xLoc && main.xLoc - windAttack < monsterArray[i].xLoc + monsterArray[i].width &&  main.yLoc + main.height > monsterArray[i].yLoc && main.yLoc < main.yLoc + monsterArray[i].height && monsterHealth[i]>0&& monsterArray[i].xLoc>main.xLoc){
                        if (!monsterIsTouchingBrickR[i]){
                            monsterArray[i].xLoc+=.5
                        }
                        monsterHealth[i]-=.01
                    }
                }
            }
            if (swordSide===2){
                ctx.fillRect(main.xLoc-windAttack,main.yLoc,windAttack,30)
                for (i=0;i<monsterArray.length;i++) {
                    if (main.xLoc - windAttack < monsterArray[i].xLoc + monsterArray[i].width && main.xLoc + main.width + windAttack > monsterArray[i].xLoc && main.yLoc + main.height > monsterArray[i].yLoc && main.yLoc < main.yLoc + monsterArray[i].height && monsterHealth[i]>0 && monsterArray[i].xLoc<main.xLoc){
                        if (!monsterIsTouchingBrickL[i]){
                            monsterArray[i].xLoc-=.5
                        }
                        monsterHealth[i]-=.01
                    }
                }
            }
            if (windAttack>150){
                largeAttack=false
                windAttack=0
                windAttackCoolDown=0
                canUseWind=false
            }
        }
        if (currentPower===1){
            if (swordSide===1){
                ballPath.push(0)
                ballX.push(1)
                ballArray.push(createImage(stringBall.src, main.xLoc, main.yLoc, 30, 30))
                windAttackCoolDown=0
                canUseWind=false
                largeAttack=false
            }
            if (swordSide===2){
                ballPath.push(0)
                ballX.push(-1)
                ballArray.push(createImage(stringBall.src, main.xLoc, main.yLoc, 30, 30))
                windAttackCoolDown=0
                canUseWind=false
                largeAttack=false
            }
        }
    }else{
        if (currentPower===0){
            maxWindAttackCooldown=500
        }
        if (currentPower===1){
            maxWindAttackCooldown=1000
        }
        if (windAttackCoolDown<maxWindAttackCooldown){
            windAttackCoolDown+=1
        }
        if (windAttackCoolDown===maxWindAttackCooldown){
            canUseWind=true
        }
    }
    for (i = 0; i < ballArray.length; i++) {
        ballArray[i].yLoc += ballPath[i]
        if (ballX[i] >= 0) {
            ballArray[i].xLoc += 1
        } else if (ballX[i] < 0) {
            ballArray[i].xLoc -= 1
        }
        for (x=0;x<monsterArray.length;x++){
            if (collide(ballArray[i], monsterArray[x])) {
                monsterHealth[x] -= .5
            }
        }
        if (ballArray[i].xLoc > 800 || ballArray[i].yLoc > 500 || ballArray[i].yLoc < 0 || ballArray[i].xLoc < 0) {
            ballArray.splice(i,1)
            ballPath.splice(i,1)
            ballX.splice(i,1)
        }
        ctx.drawImage(ballArray[i], ballArray[i].xLoc, ballArray[i].yLoc,ballArray[i].width, ballArray[i].height)
    }
}
function reloadBar(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#000000";
    ctx.fillRect(300,15,200,30)
    ctx.fillStyle="#00ffff"
    ctx.border="#000000"
    ctx.strokeRect(300, 15,200,30)
    ctx.fillRect(300, 15, attackCoolDown/swordCoolDown*200, 30)
}
function WindReloadBar() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(300, 45, 200, 30)
    ctx.fillStyle = "#fcfcfc"
    ctx.border = "#000000"
    ctx.strokeRect(300, 45, 200, 30)
    ctx.fillRect(300, 45, windAttackCoolDown / maxWindAttackCooldown * 200, 30)
}
function collide(thing1,thing2) {
    if (thing1.xLoc + thing1.width > thing2.xLoc && thing1.xLoc < thing2.xLoc + thing2.width && thing2.yLoc + thing2.height > thing1.yLoc && thing2.yLoc < thing1.yLoc + thing1.height) {
        return true
    }
}
function collision(){
    for (i=0;i<monsterArray.length;i++){
        monsterIsTouchingBrickL[i]=false
        monsterIsTouchingBrickR[i]=false
    }
    isTouchingGround=false
    isTouchingBrick=false
    sideisTouchingBrick=false
    sideisTouchingGround=false
    isTouchingSideBrickL=false
    isTouchingSideBrickR=false
    if (worldPart===1 && main.xLoc<0){
        main.xLoc+=playerSpeed
    }
    if (main.yLoc>=439){
        isTouchingGround=true
        if (!canJump){
            canJump=true
        }
    }
    if (side.yLoc>=439){
        sideisTouchingGround=true
    }
    for (i=0;i<checkPointArray.length;i++){
        if (collide(checkPointArray[i],main)) {
            currentCheckPoint=i
            checkPointUsed=true
            tempInventory=[0,0,0,0,0,0,0,0]
        }
    }
    for (i=0;i<spikeArray.length;i++){
        if (collide(spikeArray[i],main)) {
            playerHealth=0
        }
    }
    for(i=0;i<brickArray.length;i++) {
        for (x=0;x<monsterArray.length;x++){
            if (collide(brickArray[i],monsterArray[x]) && monsterType[x]!==2 && brickArray[i].xLoc+2>monsterArray[x].xLoc + monsterArray[x].width || collide(brickArray[i],monsterArray[x]) && monsterType[x]!==4 && brickArray[i].xLoc+2>monsterArray[x].xLoc + monsterArray[x].width) {
                monsterIsTouchingBrickR[x]=true
            }
            if (collide(brickArray[i],monsterArray[x]) && monsterType[x]!==2 && brickArray[i].xLoc+brickArray[i].width-2>monsterArray[x].xLoc || collide(brickArray[i],monsterArray[x]) && monsterType[x]!==4 && brickArray[i].xLoc+brickArray[i].width-2>monsterArray[x].xLoc) {
                monsterIsTouchingBrickL[x]=true
            }
        }

        if (collide(brickArray[i],main) && main.yLoc + main.height < brickArray[i].yLoc + 10) {
            isTouchingBrick = true
            if (!canJump) {
                canJump = true
            }
        }
        if (collide(brickArray[i],side) && side.yLoc + side.height < brickArray[i].yLoc + 10) {
            sideisTouchingBrick = true
        }

        if (collide(brickArray[i],main) && main.yLoc + main.height > brickArray[i].yLoc + 10) {
            stopJump = true
        }
        if (brickArray[i].xLoc + brickArray[i].width > main.xLoc && brickArray[i].xLoc+5 < main.xLoc + main.width && brickArray[i].yLoc + brickArray[i].height > main.yLoc && brickArray[i].yLoc < main.yLoc + main.height && main.yLoc + main.height > brickArray[i].yLoc + 10) {
            isTouchingSideBrickL=true
        }
        if (brickArray[i].xLoc + brickArray[i].width-5 > main.xLoc && brickArray[i].xLoc < main.xLoc + main.width && brickArray[i].yLoc + brickArray[i].height > main.yLoc && brickArray[i].yLoc < main.yLoc + main.height && main.yLoc + main.height > brickArray[i].yLoc + 10) {
            isTouchingSideBrickR=true
        }
        if (collide(brickArray[i],main) && main.yLoc + main.height > brickArray[i].yLoc + 10 && specialBrick[i] === true && specialHit[i] === false) {
            specialHit[i] = true
            inventoryAdd=Math.floor(Math.random()*3)
            inventory[0]+=inventoryAdd
            tempInventory[0]+=inventoryAdd
            if (inventoryAdd>0){
                notifications.push(inventoryAdd+" coins")
            }
        }
    }

    if(main.xLoc+main.width > 800){
        if (worldPart<4){
            worldPart+=1
        }else{
            world=3
            worldPart=1
            main.xLoc=4
            main.yLoc=440
        }
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        teleportAvailabe=false
        loadPart=true
        main.xLoc=3
        arrowCoolDown=0
        closestFound=false
        closestMonster=-1
        rightSide=0
        leftSide=0
        shoot=false
        ballArray=[]
        ballX=[]
        ballPath=[]
        arrowArray=[]
        arrowX=[]
        arrowPath=[]
        side.xLoc=main.xLoc
        side.yLoc=main.yLoc
        brickArray=[]
        questionBoxArray=[]
        monsterArray=[]
        monsterHealth=[]
        maxMonsterHealth=[]
        monsterCoolDownLength=[]
        monsterCoolDown=[]
        monsterSpeed=[]
        monsterDead=[]
        monsterDamage=[]
        monsterType=[]
        checkPointArray=[]
        spikeArray=[]
        MonSpikeArray=[]
        firstTime3=true
        firstTime2=true
        monsterX=[]
        monsterPath=[]
        monsterIsTouchingBrickL=[]
        monsterIsTouchingBrickR=[]
        activatorPillar.xLoc=-100
        teleporterOff1.xLoc=-100
        teleporterOn1.xLoc=-100
        teleporterOff2.xLoc=-100
        teleporterOn2.xLoc=-100
        currentCheckPoint=-1
        tempInventory=[0,0,0,0,0,0,0,0]
    }
    if(main.xLoc < 2){
        if (worldPart>1 && world===1 || worldPart>1 && world===2 || worldPart>1 && world===3){
            worldPart-=1
            main.xLoc=769
        }else if (worldPart===1 && world===2){
            world=1
            worldPart=3
            main.xLoc=600
        }else if (worldPart===1 && world===3){
            world=1
            worldPart=4
            main.xLoc=769
            main.yLoc=220
        }
        loadPart=true
        side.xLoc=main.xLoc
        side.yLoc=main.yLoc
        brickArray=[]
        ballArray=[]
        ballX=[]
        ballPath=[]
        questionBoxArray=[]
        monsterArray=[]
        monsterHealth=[]
        maxMonsterHealth=[]
        monsterCoolDownLength=[]
        monsterCoolDown=[]
        monsterSpeed=[]
        monsterDead=[]
        arrowCoolDown=0
        closestFound=false
        closestMonster=-1
        rightSide=0
        leftSide=0
        shoot=false
        arrowArray=[]
        arrowX=[]
        arrowPath=[]
        monsterDamage=[]
        monsterType=[]
        checkPointArray=[]
        spikeArray=[]
        firstTime3=true
        firstTime2=true
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        teleportAvailabe=false
        MonSpikeArray=[]
        monsterX=[]
        monsterPath=[]
        monsterIsTouchingBrickL=[]
        monsterIsTouchingBrickR=[]
        currentCheckPoint=-1
        activatorPillar.xLoc=-100
        teleporterOff1.xLoc=-100
        teleporterOn1.xLoc=-100
        teleporterOff2.xLoc=-100
        teleporterOn2.xLoc=-100
        tempInventory=[0,0,0,0,0,0,0,0]
    }
}
function inventoryTab(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(100, 50, 600, 400)
    ctx.fillStyle = "#000000";
    ctx.font="40px brush script MT";
    ctx.fillText("Inventory:",400,100);
    ctx.fillText("Quests:",150,100);
    ctx.fillStyle = "#4f4f4f";
    ctx.fillRect(130, 120, 180, 300)
    ctx.fillRect(350, 120, 300, 300)
    for (i=0;i<quests.length;i++){
        ctx.fillStyle = "#eaeaea";
        ctx.font="30px brush script MT";
        ctx.fillText("-"+quests[i],140,i*50+160);
    }
    ctx.strokeStyle="#ffffff";
    ctx.strokeRect(375, 135, 60, 60)
    ctx.drawImage(coin,380,140,50,50)
    ctx.font="30px vina sans";
    ctx.fillStyle = "#ffffff"
    ctx.fillText(inventory[0],425,150)
    ctx.strokeRect(465, 135, 60, 60)
    ctx.drawImage(scraps,470,140,50,50)
    ctx.fillText(inventory[1],515,150)
    ctx.strokeRect(555, 135, 60, 60)
    ctx.drawImage(slime,560,140,50,50)
    ctx.fillText(inventory[2],605,150)
    ctx.strokeRect(375, 225, 60, 60)
    ctx.drawImage(normFeather,380,230,50,50)
    ctx.fillText(inventory[3],425,240)
    ctx.strokeRect(465, 225, 60, 60)
    ctx.drawImage(iron,470,230,50,50)
    ctx.fillText(inventory[4],515,240)
    ctx.strokeRect(555, 225, 60, 60)
    ctx.drawImage(string,560,230,50,50)
    ctx.fillText(inventory[5],605,240)
    ctx.strokeRect(375, 315, 60, 60)
    ctx.drawImage(spiderEye,390,320,30,50)
    ctx.fillText(inventory[6],425,330)
    ctx.strokeRect(465, 315, 60, 60)
    ctx.drawImage(bossEye,470,320,50,50)
    ctx.fillText(inventory[7],515,330)
    ctx.strokeStyle="#000000";
}
function drawStore(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (storeThere){
        ctx.drawImage(store,store.xLoc,store.yLoc,store.width,store.height)
    }
    if (collide(store,main) && worldPart===3){
        ctx.font="20px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Press E to enter store",270,423);
    }
}
function storeTab(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (storeChoosen>swordNames.length-1 && currentStorePart===0){
        storeChoosen-=1
    }
    if (storeChoosen>arrowNames.length-1 && currentStorePart===2){
        storeChoosen-=1
    }
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(100, 50, 600, 400)
    ctx.fillStyle = "#000000";
    ctx.font="40px brush script MT";
    ctx.fillText("Store:",340,100);

    ctx.fillStyle = "#989898";
    ctx.fillRect(130, 120, 120, 300)
    ctx.strokeRect(130, 120, 120, 300)
    if (currentStorePart===0){
        ctx.fillStyle = "#09e8dc";
    }else{
        ctx.fillStyle = "#000000";
    }
    ctx.font="30px brush script MT";
    ctx.fillText("Swords",150,155);
    ctx.strokeRect(130, 120, 120, 50)
    if (currentStorePart===1){
        ctx.fillStyle = "#09e8dc";
    }else{
        ctx.fillStyle = "#000000";
    }
    ctx.fillText("Powers",150,205);
    ctx.strokeRect(130, 170, 120, 50)
    if (currentStorePart===2){
        ctx.fillStyle = "#09e8dc";
    }else{
        ctx.fillStyle = "#000000";
    }
    ctx.fillText("Arrows",150,255);
    ctx.strokeRect(130, 220, 120, 50)
    ctx.fillStyle = "#989898";
    ctx.fillRect(250, 120, 410, 300)
    ctx.border = "#000000"
    ctx.strokeRect(250, 120, 410, 300)
    ctx.strokeRect(510, 120, 150, 300)
    if (currentStorePart===0) {
        for (i=0;i<swordsR.length;i++) {
            ctx.font = "25px brush script MT";
            if (i === 0 || i === 1 || i === 2) {
                Yposition = 150
            }
            if (i === 3 || i === 4 || i === 5) {
                Yposition = 230
            }
            if (i === 6 || i === 7 || i === 8) {
                Yposition = 310
            }
            ctx.drawImage(swordsR[i], 270 + ((i % 3) * 80), Yposition, 50, 50)
            if (i === storeChoosen && storeSection === 1) {
                ctx.fillStyle = "#16e810";
            } else {
                ctx.fillStyle = "#000000";
            }
            ctx.fillText(swordNames[i], 270 + ((i % 3) * 80), Yposition - 7);
        }
        ctx.font = "25px brush script MT";
        ctx.fillStyle = "#000000";
        ctx.fillText("Cost:",520,300);
        ctx.fillText("Damage:",520,360);
        ctx.fillText("Reload:",520,390);
        if (storeChoosen===0){
            ctx.font = "20px brush script MT";
            ctx.fillText("Bought",520,330);
            ctx.font = "25px brush script MT";
            ctx.fillText("2",600,360);
            ctx.fillText("200",590,390);
        }
        if (storeChoosen===1){
            ctx.font = "20px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("10 coins, 20 scrap",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("5",600,360);
            ctx.fillText("200",590,390);
        }
        if (storeChoosen===2){
            ctx.font = "15px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("10 coins, 10 scrap, 10 slime",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("10",600,360);
            ctx.fillText("300",590,390);
        }
        if (storeChoosen===3){
            ctx.font = "15px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("15 coins, 10 iron, 10 scrap",520,325);
                ctx.fillText("20 feathers",520,338);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("10",600,360);
            ctx.fillText("200",590,390);
        }
        if (storeChoosen===4){
            ctx.font = "15px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("30 coins, 20 iron, 50 scrap",520,325);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("30",600,360);
            ctx.fillText("400",590,390);
        }
        if (storeChoosen===5){
            ctx.font = "15px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("30 coins, 20 string",520,325);
                ctx.fillText("30 spider eye",520,338);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("40",600,360);
            ctx.fillText("400",590,390);
        }
        if (storeChoosen===6){
            ctx.font = "15px brush script MT";
            if (bought[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("50 coins, 1 boss eye",520,325);
                ctx.fillText("30 spider eye",520,338);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("30",600,360);
            ctx.fillText("200",590,390);
        }
        ctx.drawImage(swordsR[storeChoosen],545,180,80,80)
    }

    if (currentStorePart===1){
        for (i=0;i<powers.length;i++) {
            ctx.font = "25px brush script MT";
            if (i === 0 || i === 1 || i === 2) {
                Yposition = 150
            }
            ctx.drawImage(powers[i], 270 + ((i % 3) * 80), Yposition, 50, 20)
            if (i === storeChoosen && storeSection === 1) {
                ctx.fillStyle = "#16e810";
            } else {
                ctx.fillStyle = "#000000";
            }
            ctx.fillText(powerNames[i], 270 + ((i % 3) * 80), Yposition - 7);
        }
        ctx.font = "25px brush script MT";
        ctx.fillStyle = "#000000";
        ctx.fillText("Cost:",520,300);
        ctx.fillText("Cooldown:",520,360);
        if (storeChoosen===0){
            ctx.font = "20px brush script MT";
            if (boughtPowers[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("20 coins, 5 iron",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("500",600,360);
        }
        if (storeChoosen===1){
            ctx.font = "20px brush script MT";
            if (boughtPowers[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("50 coins, 20 string, 1 boss eye",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("1000",600,360);
        }
        ctx.drawImage(powers[storeChoosen],545,180,80,32)
    }


    if (currentStorePart===2){
        for (i=0;i<arrowR.length;i++) {
            ctx.font = "25px brush script MT";
            if (i === 0 || i === 1 || i === 2) {
                Yposition = 150
            }
            if (i === 3 || i === 4 || i === 5) {
                Yposition = 230
            }
            ctx.drawImage(arrowR[i], 270 + ((i % 3) * 80), Yposition, 50, 20)
            if (i === storeChoosen && storeSection === 1) {
                ctx.fillStyle = "#16e810";
            } else {
                ctx.fillStyle = "#000000";
            }
            ctx.fillText(arrowNames[i], 270 + ((i % 3) * 80), Yposition - 7);
        }
        ctx.font = "25px brush script MT";
        ctx.fillStyle = "#000000";
        ctx.fillText("Cost:",520,300);
        ctx.fillText("Damage:",520,360);
        if (storeChoosen===0){
            ctx.font = "20px brush script MT";
            if (boughtArrow[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("20 coins, 5 iron",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("1",600,360);
        }
        if (storeChoosen===1){
            ctx.font = "20px brush script MT";
            if (boughtArrow[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("20 coins, 5 iron",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("5",600,360);
        }
        if (storeChoosen===2){
            ctx.font = "12px brush script MT";
            if (boughtArrow[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("10 iron, 20 string, 20 spider eye",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("10",600,360);
        }
        if (storeChoosen===3){
            ctx.font = "12px brush script MT";
            if (boughtArrow[storeChoosen]===true){
                ctx.fillText("Bought",520,330);
            }else{
                ctx.fillText("20 iron, 1 boss eye",520,330);
            }
            ctx.font = "25px brush script MT";
            ctx.fillText("15",600,360);
        }

        ctx.drawImage(arrowR[storeChoosen],545,180,80,32)
    }
    ctx.font="40px brush script MT";
    ctx.fillStyle="#000000";
    ctx.fillText("Stats",550,160);
    ctx.font="30px brush script MT";


}
function drawTeleporters() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(activatorPillar, activatorPillar.xLoc, activatorPillar.yLoc, activatorPillar.width, activatorPillar.height)
    ctx.drawImage(teleporterOff2, teleporterOff2.xLoc, teleporterOff2.yLoc, teleporterOff2.width, teleporterOff2.height)
    ctx.drawImage(teleporterOff1, teleporterOff1.xLoc, teleporterOff1.yLoc, teleporterOff1.width, teleporterOff1.height)
    if (teleporterIsOn[0]===true && worldPart===3 && world===1){
        ctx.drawImage(teleporterOn1, teleporterOn1.xLoc, teleporterOn1.yLoc, teleporterOn1.width, teleporterOn1.height)
        ctx.drawImage(teleporterOn2, teleporterOn2.xLoc, teleporterOn2.yLoc, teleporterOn2.width, teleporterOn2.height)
        if (collide(teleporterOn1,main)){
            ctx.font="20px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Press E to teleport",420,420);
        }
        if (collide(teleporterOn2,main)){
            ctx.font="20px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Press E to teleport",550,210);
        }
    }
    if (teleporterIsOn[1]===true && worldPart===2 && world===2){
        ctx.drawImage(teleporterOn1, teleporterOn1.xLoc, teleporterOn1.yLoc, teleporterOn1.width, teleporterOn1.height)
        ctx.drawImage(teleporterOn2, teleporterOn2.xLoc, teleporterOn2.yLoc, teleporterOn2.width, teleporterOn2.height)
    }


    if (collide(activatorPillar,main) && teleporterIsOn[0]===false && worldPart===3 && world===1){
        ctx.font="20px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Press E to activate portal pads",550,200);
    }

}
function dead(){
    if (playerHealth<1){
        playerHealth=100
        if (currentCheckPoint>=0){
            main.xLoc=checkPointArray[currentCheckPoint].xLoc
            main.yLoc=checkPointArray[currentCheckPoint].yLoc
        }else{
            if (worldPart!==4){
                main.xLoc=100
                main.yLoc=440
            }else{
                main.xLoc=100
                main.yLoc=220
            }
        }
        spiderBossSpikeAttacks=0
        side.xLoc=main.xLoc
        side.yLoc=main.yLoc
        respawnUsed=true
        loadPart=true
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        ballArray=[]
        ballX=[]
        ballPath=[]
        monsterSpeed=[]
        monsterDead=[]
        monsterDamage=[]
        monsterCoolDown=[]
        monsterCoolDownLength=[]
        monsterHealth=[]
        maxMonsterHealth=[]
        arrowCoolDown=0
        closestFound=false
        closestMonster=-1
        rightSide=0
        leftSide=0
        shoot=false
        arrowArray=[]
        arrowX=[]
        arrowPath=[]
        monsterIsTouchingBrickL=[]
        monsterIsTouchingBrickR=[]
        monsterArray=[]
        brickArray=[]
        checkPointArray=[]
        questionBoxArray=[]
        spikeArray=[]
        MonSpikeArray=[]
        firstTime3=true
        firstTime2=true
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        teleportAvailabe=false
        monsterX=[]
        monsterPath=[]
        activatorPillar.xLoc=-100
        teleporterOff1.xLoc=-100
        teleporterOn1.xLoc=-100
        teleporterOff2.xLoc=-100
        teleporterOn2.xLoc=-100
        for (i=0;i<inventory.length;i++){
            inventory[i]-=tempInventory[i]
            if (inventory[i]<0){
                inventory[i]=0
            }
        }
        tempInventory=[0,0,0,0,0,0,0,0]
    }
    for (i=0;i<monsterArray.length;i++){
        if (monsterHealth[i]<=0 && !monsterDead[i]){
            monsterDead[i]=true
            if (monsterType[i]===1){
                inventoryAdd=Math.floor(Math.random()*3)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0){
                    notifications.push(inventoryAdd+" coins")
                }
                notifications.push(inventoryAdd+" coins")
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[1]+=inventoryAdd
                tempInventory[1]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " scraps")
                }
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[2]+=inventoryAdd
                tempInventory[2]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " slime")
                }
                if (Math.round(Math.random()*3)===2){
                    inventoryAdd=Math.floor(Math.random()*2)+1
                    inventory[4]+=inventoryAdd
                    tempInventory[4]+=inventoryAdd
                    if (inventoryAdd>0) {
                        notifications.push(inventoryAdd + " iron")
                    }

                }
            }
            if(monsterType[i]===2){
                inventoryAdd=Math.floor(Math.random()*5)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " coins")
                }
                inventoryAdd=Math.floor(Math.random()*3)
                inventory[1]+=inventoryAdd
                tempInventory[1]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " scrap")
                }
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[3]+=inventoryAdd
                tempInventory[3]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " feathers")
                }
                if (Math.round(Math.random()*3)===2){
                    inventoryAdd=Math.floor(Math.random()*2)+1
                    inventory[4]+=inventoryAdd
                    tempInventory[4]+=inventoryAdd
                    if (inventoryAdd>0) {
                        notifications.push(inventoryAdd + " iron")
                    }
                }
            }
            if(monsterType[i]===3){
                inventoryAdd=Math.floor(Math.random()*5)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " coins")
                }
                inventoryAdd=Math.floor(Math.random()*5)
                inventory[1]+=inventoryAdd
                tempInventory[1]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " scrap")
                }
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[5]+=inventoryAdd
                tempInventory[5]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " string")
                }
                inventoryAdd=Math.floor(Math.random()*3)
                inventory[6]+=inventoryAdd
                tempInventory[6]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " spider eye")
                }
            }
            if(monsterType[i]===4){
                inventoryAdd=Math.floor(Math.random()*3)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " coins")
                }
                inventoryAdd=Math.floor(Math.random()*5)
                inventory[1]+=inventoryAdd
                tempInventory[1]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " scrap")
                }
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[6]+=inventoryAdd
                tempInventory[6]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " spider eye")
                }
            }
            if(monsterType[i]===5){
                inventoryAdd=Math.floor(Math.random()*6)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " coins")
                }
                inventoryAdd=Math.floor(Math.random()*10)
                inventory[6]+=inventoryAdd
                tempInventory[6]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " spider eye")
                }
            }
            if(monsterType[i]===6){
                inventoryAdd=Math.floor(Math.random()*30)
                inventory[0]+=inventoryAdd
                tempInventory[0]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " coins")
                }
                inventoryAdd=Math.floor(Math.random()*21)
                inventory[5]+=inventoryAdd
                tempInventory[5]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " string")
                }
                inventoryAdd=Math.floor(Math.random()*21)
                inventory[6]+=inventoryAdd
                tempInventory[6]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " spider eye")
                }
                inventoryAdd=1
                inventory[7]+=inventoryAdd
                tempInventory[7]+=inventoryAdd
                if (inventoryAdd>0) {
                    notifications.push(inventoryAdd + " boss eye")
                }
            }
            //add to inventory here
        // inventory: 0=coins, 1=scraps, 2=slime ball, 3=feather,
        }
    }

}
function map(){
    if (mapOpen){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(50, 50, 700, 400)
        //you are here
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("You are here:",70,80);
        ctx.fillStyle = "#d99056";
        ctx.fillRect(203, 60, 28, 28)

        //undiscovered
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Undiscovered:",70,120);
        ctx.fillStyle = "#a89c9c";
        ctx.fillRect(208, 100, 28, 28)

        //shop
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Shop:",550,80);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(617, 60, 28, 28)

        //portal
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("World Portal:",550,120);
        ctx.fillStyle = "#003193";
        ctx.fillRect(692, 100, 28, 28)
        if (world===1){
            //map
            ctx.font="40px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Grass Map",320,100);

            //grass 1
            if (worldPart===1){
                ctx.fillStyle = "#d99056";
            }else{
                ctx.fillStyle = "#00faff";
            }
            ctx.fillRect(70, 200, 70, 70)
            ctx.fillStyle = "#000000"
            ctx.border = "#000000"
            ctx.strokeRect(70, 200, 70, 70)
            ctx.font="20px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Start",85,240);

            //grass 2
            if (forestDiscovered[1]===true){
                if (worldPart===2){
                    ctx.fillStyle = "#d99056";
                }else{
                    ctx.fillStyle = "#00faff";
                }

                ctx.fillRect(140, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(140, 200, 70, 70)

            }else{
                ctx.fillStyle = "#a89c9c";
                ctx.fillRect(140, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(140, 200, 70, 70)
            }




            //grass 3
            if (forestDiscovered[2]===true){
                if (worldPart===3){
                    ctx.fillStyle = "#d99056";
                }else{
                    ctx.fillStyle = "#00faff";
                }
                ctx.fillRect(210, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(210, 200, 70, 70)
                //shop
                ctx.fillStyle = "#ff0000";
                ctx.fillRect(240, 250, 15, 15)
            }else{
                ctx.fillStyle = "#a89c9c";
                ctx.fillRect(210, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(210, 200, 70, 70)
            }
            //grass 4
            if (forestDiscovered[3]===true){
                if (worldPart===4){
                    ctx.fillStyle = "#d99056";
                }else{
                    ctx.fillStyle = "#00faff";
                }
                ctx.fillRect(280, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(280, 200, 70, 70)
            }else {
                ctx.fillStyle = "#a89c9c";
                ctx.fillRect(280, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(280, 200, 70, 70)
            }
        }
        if (world===2){
            //map
            ctx.font="40px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Cave Map",320,100);

            //cave 1
            if (worldPart===1){
                ctx.fillStyle = "#d99056";
            }else{
                ctx.fillStyle = "#00faff";
            }
            ctx.fillRect(70, 200, 70, 70)
            ctx.fillStyle = "#000000"
            ctx.border = "#000000"
            ctx.strokeRect(70, 200, 70, 70)
            ctx.font="20px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Start",85,240);

            //cave 2
            if (caveDiscovered[1]===true){
                if (worldPart===2){
                    ctx.fillStyle = "#d99056";
                }else{
                    ctx.fillStyle = "#00faff";
                }

                ctx.fillRect(140, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(140, 200, 70, 70)

            }else{
                ctx.fillStyle = "#a89c9c";
                ctx.fillRect(140, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(140, 200, 70, 70)
            }




            //cave 3
            if (caveDiscovered[2]===true){
                if (worldPart===3){
                    ctx.fillStyle = "#d99056";
                }else{
                    ctx.fillStyle = "#00faff";
                }
                ctx.fillRect(210, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(210, 200, 70, 70)
                //shop
                ctx.fillStyle = "#ff0000";
                ctx.fillRect(240, 250, 15, 15)
            }else{
                ctx.fillStyle = "#a89c9c";
                ctx.fillRect(210, 200, 70, 70)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(210, 200, 70, 70)
            }

        }
    }
}
function fall(){
    if (!jumping && !isTouchingGround && !isTouchingBrick){
        main.yLoc+=1
    }
    if (!sideisTouchingGround && !sideisTouchingBrick){
        side.yLoc+=.5
    }
}
var time=60
function jump() {
    if (jumping) {
        canJump = false
        if (time > 0) {
            time = time - 1
            if(!stopJump){
                main.yLoc -= 1.5
            }else{
                main.yLoc+=1.5
                stopJump=false
                jumping=false
            }
        } else {
            time = 60
            jumping = false
        }
    }
}
function intro(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if (introWanted===""){
        introWanted=prompt("Do you want a intro (y or n):")
        if (introWanted==="n"){
            introPart=8
        }else{
            introPart=1
        }
    }
    if (introPart===1){
        ctx.font="40px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("To Move Use:",200,150);

        if (!Wused){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(440, 100, 30, 30)
        if (!Sused){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(440, 130, 30, 30)
        if (!Aused){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(410, 130, 30, 30)
        if (!Dused){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(470, 130, 30, 30)

        ctx.fillStyle = "#000000"
        ctx.border = "#000000"
        ctx.strokeRect(440, 100, 30, 30)
        ctx.strokeRect(440, 130, 30, 30)
        ctx.strokeRect(410, 130, 30, 30)
        ctx.strokeRect(470, 130, 30, 30)

        ctx.font="20px arial";
        ctx.fillStyle="#000000";
        ctx.fillText("W",445,123);
        ctx.fillText("S",448,153);
        ctx.fillText("A",418,153);
        ctx.fillText("D",478,153);
        if (Wused && Sused && Aused && Dused){
            introPart+=1
        }
    }else if (introPart===2){
        ctx.font="40px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Press to jump:",200,150);
        if (!SpaceUsed){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(400, 128, 80, 30)
        ctx.fillStyle = "#000000"
        ctx.border = "#000000"
        ctx.strokeRect(400, 128, 80, 30)
        ctx.font="20px arial";
        ctx.fillStyle="#000000";
        ctx.fillText("Space",410,150);
        if (SpaceUsed && go && isTouchingGround){
            introPart+=1
        }
        if(SpaceUsed && !isTouchingGround){
            go=true
        }
    } else if (introPart===3){
        ctx.font="40px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Press to Equip Sword:",140,150);
        if (!OneUsed){
            ctx.fillStyle = "#00ffff";
        }else{
            ctx.fillStyle = "#ffb400"
        }
        ctx.fillRect(450, 125, 30, 30)
        ctx.fillStyle = "#000000"
        ctx.border = "#000000"
        ctx.strokeRect(450, 125, 30, 30)
        ctx.font="20px arial";
        ctx.fillStyle="#000000";
        ctx.fillText("1",458,147);
        if (OneUsed){
            ctx.fillStyle="#ffffff";
            ctx.fillRect(142, 167, 270, 100)
            ctx.fillStyle = "#000000"
            ctx.border = "#000000"
            ctx.strokeRect(142, 167, 270, 100)
            ctx.font="30px castoro titling";
            ctx.fillStyle="#000000";
            ctx.fillText("Your attack is ready",150,200);
            ctx.fillText("when blue bar is full",150,250);
            wait-=1
            if (wait<0){
                ctx.fillStyle="#ffffff";
                ctx.fillRect(142, 167, 340, 100)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(142, 167, 340, 100)
                ctx.font="30px castoro titling";
                ctx.fillStyle="#000000";
                ctx.fillText("You can upgrade the sword",150,200);
                ctx.fillText("throughout the game",150,250);
                wait2-=1
                if (wait2<0){
                    introPart+=1
                    wait2=500
                    wait=500
                }
            }
        }
    }else if (introPart===4){
        if (!sideMoved){
            ctx.fillStyle="#ffffff";
        }else{
            ctx.fillStyle="#ffb400";
        }

        ctx.fillRect(190, 110, 270, 90)
        ctx.fillStyle = "#000000"
        ctx.border = "#000000"
        ctx.strokeRect(190, 110, 270, 90)
        ctx.font="40px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Move Away",200,150);
        ctx.fillText("from your side kick",200,180);
        if (sideMoved){
            wait-=1
            if (wait<0){
                if (!sideTeleport){
                    ctx.fillStyle="#ffffff";
                }else{
                    ctx.fillStyle="#ffb400";
                }
                ctx.fillRect(190, 110, 270, 90)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(190, 110, 270, 90)
                ctx.font="40px brush script MT";
                ctx.fillText("Jump Up to a brick",200,150);
                ctx.fillText("platform and wait",200,180);
                if(sideTeleport){
                    wait2-=1
                    if(wait2<0){
                        introPart+=1
                        wait2=500
                        wait=500
                    }
                }
            }
        }
    }
    else if(introPart===5){
        if (!isTouchingGround){
            ctx.font="40px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Jump Down to the ground",200,150);
        }
        if (isTouchingGround){
            if (!continueIntro){
                ctx.font="40px brush script MT";
                ctx.fillStyle="#000000";
                ctx.fillText("Press to command arrow attack:",100,150);
                if (!Qused){
                    ctx.fillStyle = "#00ffff";
                }else{
                    ctx.fillStyle = "#ffb400"
                }
                ctx.fillRect(520, 125, 30, 30)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(520, 125, 30, 30)
                ctx.font="20px arial";
                ctx.fillStyle="#000000";
                ctx.fillText("Q",527,147);
            }
            if (continueIntro && !continueIntro2){
                ctx.font="40px brush script MT";
                ctx.fillStyle="#000000";
                ctx.fillText("Move close to monster",250,150);
                for (i=0;i<monsterArray.length;i++){
                    if (main.xLoc>monsterArray[i].xLoc-70){
                        continueIntro2=true
                    }
                }
            }
            if(continueIntro2){
                ctx.font="40px brush script MT";
                ctx.fillStyle="#000000";
                ctx.fillText("Press to use big attack:",100,200);
                if (!Fused){
                    ctx.fillStyle = "#00ffff";
                }else{
                    ctx.fillStyle = "#ffb400"
                }
                ctx.fillRect(410, 175, 30, 30)
                ctx.fillStyle = "#000000"
                ctx.border = "#000000"
                ctx.strokeRect(410, 175, 30, 30)
                ctx.font="20px arial";
                ctx.fillStyle="#000000";
                ctx.fillText("F",418,197);
                if (Fused){
                    ctx.fillStyle="#ffffff";
                    ctx.fillRect(95, 217, 340, 100)
                    ctx.fillStyle = "#000000"
                    ctx.border = "#000000"
                    ctx.strokeRect(95, 217, 340, 100)
                    ctx.font="30px castoro titling";
                    ctx.fillStyle="#000000";
                    ctx.fillText("White Bar has to be full",100,250);
                    ctx.fillText("to use big attack",100,300);
                    wait-=1
                    if(wait<0){
                        ctx.fillStyle="#ffffff";
                        ctx.fillRect(95, 217, 340, 100)
                        ctx.fillStyle = "#000000"
                        ctx.border = "#000000"
                        ctx.strokeRect(95, 217, 340, 100)
                        ctx.font="30px castoro titling";
                        ctx.fillStyle="#000000";
                        ctx.fillText("Big Attacks can be",100,250);
                        ctx.fillText("upgraded and switched",100,300);
                        wait2-=1
                        if (wait2<0){
                            introPart+=1
                            wait=500
                            wait2=500
                            continueIntro=false
                            continueIntro2=false
                        }
                    }
                }
            }
        }
    }else if (introPart===6){
        if (monstersDefeated<2){
            ctx.font="40px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("Now defeat the 2 monsters",100,150);
            monstersDefeated=0
            for (i=0;i<monsterArray.length;i++){
                if(monsterHealth[i]<=0){
                    monstersDefeated+=1
                }
            }
        }
        if(monstersDefeated>1){
            wait-=1
            if (wait<0){
                introPart+=1
                wait=500
                wait2=500
            }
        }
    }else if(introPart===7){
        ctx.font="40px brush script MT";
        ctx.fillStyle="#000000";
        if(!checkPointUsed){
            ctx.fillText("Check Points will be placed around the map",100,150);
            ctx.fillText("Walk to a red flag to activate checkpoint",100,200);
        }
        if(checkPointUsed){
            if (!respawnUsed){
                ctx.fillText("Check Point will turn blue when activated",100,150);
                playerHealth-=.1;
            }
        }
        if (respawnUsed && wait>=0){
            ctx.fillText("When you die you will respawn at the check point",100,150);
            ctx.fillText("All monsters will also reset",100,200);
            wait-=1
        }
        if (wait<0){
            ctx.font="40px brush script MT";
            ctx.fillStyle="#000000";
            ctx.fillText("You have finished the intro",100,150);
            wait2-=1
            if (wait2<0){
                introPart+=1
            }
        }
    }

}
function minerText(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(100, 50, 600, 400)
    ctx.drawImage(minerNpc,500,100,300,300)
    if (!minerTalked){
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Miner: I need your help",120,110);
        ctx.fillText("Miner: The spiders have taken over the mines",120,150);
        ctx.fillText("Miner: I need you to help kill the king",120,190);
        ctx.fillText("Miner: and take back the mines",120,230);
        ctx.font="30px roboto";
        ctx.fillText("You: Press Q to accept or press E to decline",120,420);
    }else{
        ctx.font="30px brush script MT";
        ctx.fillStyle="#000000";
        ctx.fillText("Miner: You havent killed the king yet",120,110);
        ctx.fillText("You: Press E to leave",120,420);
    }
}
var a;
function animateLoop(){
    a = requestAnimationFrame(animateLoop)
    if (!mapOpen && !inventoryOpen && !storeOpen && !minerTalk){
        drawBackground()
        drawBricks()
        healthText()
        drawSpikes()
        drawStore()
        drawSpawners()
        drawTeleporters()
        showNotifications()
        if (introPart>6){
            dead()
            drawCheckPoints()
        }
        if (introPart>2){
            drawSword()
            damageSword()
        }
        createSide()
        if (introPart>3){
            sideFollow()
        }
        if (introPart>5){
            moveMonster()
        }
        monsterHealthBar()
        monsterReloadBar()
        sideReloadBar()
        if (introPart>5){
            damageMonster()
            coolDownMonster()
        }
        if(introPart>1){
            jump()
            fall()
        }
        CoinText()
        reloadBar()
        WindReloadBar()
        collision()
        createMain()
        drawMonster()
        if (introPart>4){
            bigAttack()
            sideAttack()
            shootArrow()
        }

        intro()
    }else if(mapOpen){
        map()
    }else if(inventoryOpen){
        inventoryTab()
    }else if (storeOpen){
        storeTab()
    }else if (minerTalk){
        minerText()
    }

    if (test===false){
        test=true
    }
}
var createImage = function(src, xLoc,yLoc,width,height,visible) {
    var img   = new Image();
    img.src   = src;
    img.xLoc = xLoc;
    img.yLoc = yLoc;
    img.width = width;
    img.height = height;
    img.visible = visible
    return img;
}

$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //d key to go right
    if(keycode === 68 && !isTouchingSideBrickR && !mapOpen && !storeOpen && !inventoryOpen){
        stopPlayer = main.xLoc > 650 && collide(main, caveEntr) && worldPart === 3 && world===1;
        stopPlayer2 = main.xLoc > 500 && worldPart === 3 && world===2;
        if (!stopPlayer && !stopPlayer2) {
            main.xLoc += playerSpeed
            swordSide = 1
            Dused = true
        }
    }
    //a key to go left
    if(keycode === 65 && !isTouchingSideBrickL&& !mapOpen && !storeOpen && !inventoryOpen){
        main.xLoc-=playerSpeed
        swordSide=2
        Aused=true
    }
    //w key to attack up
    if (keycode===87 && !storeOpen){
        swordSide=3
        Wused=true

    }
    //s key to attack down
    if (keycode===83 && !storeOpen){
        swordSide=4
        Sused=true
        stopJump=true
    }
    if (keycode===87 && storeOpen && storeSection===0){
        currentStorePart-=1
        if (currentStorePart<0){
            currentStorePart=2
        }
    }
    if (keycode===83 && storeOpen && storeSection===0){
        currentStorePart+=1
        if (currentStorePart>2){
            currentStorePart=0
        }
    }
    if (keycode===87 && storeOpen && storeSection===1){
        storeChoosen-=3
        if (storeChoosen<0){
            storeChoosen+=3
        }
    }
    if (keycode===65 && storeOpen && storeSection===1){
        storeChoosen-=1
        if (storeChoosen<0){
            storeChoosen+=1
        }
    }
    if (keycode===68 && storeOpen && storeSection===1){
        storeChoosen+=1
    }
    if (keycode===83 && storeOpen && storeSection===1){
        storeChoosen+=3
    }
    if (keycode===13 && storeOpen && storeSection===0){
        storeSection=1
        storeChoosen=0
    }
    if (keycode===13 && storeOpen && storeSection===1){
        if (currentStorePart===0){
            if (!bought[storeChoosen]){
                if (storeChoosen===0){
                    if (inventory[0]>=10 && inventory[1]>=20){
                        inventory[0]-=10
                        inventory[1]-=20
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===1){
                    if (inventory[0]>=10 && inventory[1]>=20 && inventory[2]>=15){
                        inventory[0]-=10
                        inventory[1]-=20
                        inventory[2]-=15
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===2){
                    if (inventory[0]>=10 && inventory[1]>=20 && inventory[2]>=10){
                        inventory[0]-=15
                        inventory[1]-=10
                        inventory[2]-=10
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===3){
                    if (inventory[0]>=15 && inventory[1]>=10 && inventory[3]>=20 && inventory[4]>=10){
                        inventory[0]-=15
                        inventory[1]-=10
                        inventory[3]-=20
                        inventory[4]-=10
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===4){
                    if (inventory[0]>=30 && inventory[4]>=20 && inventory[1]>=50){
                        inventory[0]-=30
                        inventory[1]-=50
                        inventory[4]-=20
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===5){
                    if (inventory[0]>=30 && inventory[5]>=20 && inventory[6]>=30){
                        inventory[0]-=30
                        inventory[5]-=20
                        inventory[6]-=30
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
                if (storeChoosen===6){
                    if (inventory[0]>=50 && inventory[6]>=30 && inventory[7]>=1){
                        inventory[0]-=30
                        inventory[6]-=30
                        inventory[7]-=1
                        if (storeChoosen>currentSword){
                            currentSword=storeChoosen
                        }
                        bought[storeChoosen]=true
                    }
                }
            }else{
                currentSword=storeChoosen
            }
        }
        if (currentStorePart===1){
            if (!boughtPowers[storeChoosen]){
                if (storeChoosen===1){
                    if (inventory[0]>=50 && inventory[5]>=20 && inventory[7]>=1){
                        inventory[0]-=50
                        inventory[5]-=20
                        inventory[7]-=1
                        if (storeChoosen>currentPower){
                            currentPower=storeChoosen
                        }
                        boughtPowers[storeChoosen]=true
                    }
                }
            }else{
                currentPower=storeChoosen
            }
        }
        if (currentStorePart===2){
            if (!boughtArrow[storeChoosen]){
                if (storeChoosen===1){
                    if (inventory[0]>=20 && inventory[4]>=5){
                        inventory[0]-=10
                        inventory[4]-=5
                        if (storeChoosen>currentArrow){
                            currentArrow=storeChoosen
                        }
                        boughtArrow[storeChoosen]=true
                    }
                }
                if (storeChoosen===2){
                    if (inventory[4]>=10 && inventory[5]>=20 && inventory[6]>=20){
                        inventory[4]-=10
                        inventory[5]-=20
                        inventory[6]-=20
                        if (storeChoosen>currentArrow){
                            currentArrow=storeChoosen
                        }
                        boughtArrow[storeChoosen]=true
                    }
                }
                if (storeChoosen===3){
                    if (inventory[4]>=20 && inventory[7]>=1){
                        inventory[4]-=20
                        inventory[7]-=1
                        if (storeChoosen>currentArrow){
                            currentArrow=storeChoosen
                        }
                        boughtArrow[storeChoosen]=true
                    }
                }
            }else{
                currentArrow=storeChoosen
            }
        }

    }


    if (keycode===27 && storeOpen && storeSection===0){
        storeOpen=false
    }
    if (keycode===27 && storeOpen && storeSection===1){
        storeSection=0
    }
    //space key to jump
    if (keycode===32){
        if(!jumping && canJump){
            jumping=true
        }
        SpaceUsed=true
    }
    //1 to equip sword
    if (keycode===49){
        SwordEquipped = !SwordEquipped;
        OneUsed=true
    }
    //f to use big attack
    if (keycode===70){
        if (windAttackCoolDown===maxWindAttackCooldown){
            largeAttack=true
            Fused=true
        }
    }
    //q to shoot arrow
    if (keycode===81 && !minerTalk){
        if (arrowCoolDown===arrowCoolDownMax){
            shoot=true
            Qused=true
        }
    }
    if (keycode===77 && !inventoryOpen && !storeOpen && !minerTalk){
        mapOpen = !mapOpen;
    }
    if (keycode===9 && !mapOpen && !storeOpen && !minerTalk){
        inventoryOpen=!inventoryOpen;
    }
    if (keycode===69 && collide(main,store) && !mapOpen && !inventoryOpen && !minerTalk && world===1 && worldPart===3){
        storeOpen=!storeOpen;
    }

    if (collide(main,teleporterOn1) && worldPart===3 && world===1 && teleporterIsOn[0] && keycode===69 && !minerTalk){
        main.xLoc=teleporterOn2.xLoc+10
        main.yLoc=teleporterOn2.yLoc-30
    }
    if (collide(main,teleporterOn2) && worldPart===3 && world===1 && teleporterIsOn[0] && keycode===69 && !minerTalk){
        main.xLoc=teleporterOn1.xLoc+10
        main.yLoc=teleporterOn1.yLoc-30
    }
    if (collide(main,teleporterOn1) && worldPart===2 && world===2 && teleporterIsOn[1] && keycode===69){
        main.xLoc=teleporterOn2.xLoc+10
        main.yLoc=teleporterOn2.yLoc-30
    }
    if (collide(main,teleporterOn2) && worldPart===2 && world===2 && teleporterIsOn[1] && keycode===69){
        main.xLoc=teleporterOn1.xLoc+10
        main.yLoc=teleporterOn1.yLoc-30
    }
    if (collide(main,activatorPillar) && worldPart===3 && world===1 && keycode===69 && !minerTalk){
        teleporterIsOn[0]=true
    }
    if (collide(main,activatorPillar) && worldPart===2 && world===2 && keycode===69){
        teleporterIsOn[1]=true
    }
    if (minerTalk){
        if (keycode===69){
            minerTalk=false
        }
        if (keycode===81 && !minerTalked){
            quests.push("Clear the cave")
            spiderBossDefeated=false
            minerTalk=false
            minerTalked=true
        }
    }
    if (collide(minerNpc,main) && keycode===72){
        minerTalk=true
    }
    if (minerTalked && worldPart===3 && world===1 && collide(main,caveEntr) && keycode===69){
        world=2
        worldPart=1
        main.xLoc=20
        loadPart=true
        arrowCoolDown=0
        closestFound=false
        closestMonster=-1
        rightSide=0
        leftSide=0
        shoot=false
        ballArray=[]
        ballX=[]
        ballPath=[]
        arrowArray=[]
        arrowX=[]
        arrowPath=[]
        side.xLoc=main.xLoc-10
        side.yLoc=main.yLoc
        brickArray=[]
        questionBoxArray=[]
        monsterArray=[]
        monsterHealth=[]
        maxMonsterHealth=[]
        monsterCoolDownLength=[]
        monsterCoolDown=[]
        monsterSpeed=[]
        monsterDead=[]
        monsterDamage=[]
        monsterType=[]
        checkPointArray=[]
        spikeArray=[]
        MonSpikeArray=[]
        firstTime3=true
        firstTime2=true
        portalOrbVisible=false
        portalGunVisible=false
        sideCheck=0
        sideLoad=0
        firstPortalLoad=false
        secondPortalLoad=false
        portalOrb.xLoc=-100
        portalGun.xLoc=-100
        sideTeleport=true
        teleportAvailabe=false
        monsterX=[]
        monsterPath=[]
        monsterIsTouchingBrickL=[]
        monsterIsTouchingBrickR=[]
        activatorPillar.xLoc=-100
        teleporterOff1.xLoc=-100
        teleporterOn1.xLoc=-100
        teleporterOff2.xLoc=-100
        teleporterOn2.xLoc=-100
        currentCheckPoint=-1
        tempInventory=[0,0,0,0,0,0,0,0]
    }
})