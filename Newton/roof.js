class Roof
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
var roofPosition=this.body.position 
push()
fill("blue")
translate(roofPosition.x,roofPosition.y)
rect(0,0,this.width,this.height)
pop()
}
}