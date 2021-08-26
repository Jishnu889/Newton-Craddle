class Ground
{
constructor(a,b,c,d)
{
var options=
{
    isStatic:true
}
this.x=a
this.y=b
this.width=c 
this.height=d 
this.body=Bodies.rectangle(a,b,c,d,options)
World.add(world,this.body)
}
display()
{
var groundPosition=this.body.position 
push()
fill("brown")
translate(groundPosition.x,groundPosition.y)
rect(0,0,this.width,this.height)
pop()
}
}