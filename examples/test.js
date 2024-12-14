function foo(){
  const a = this.$refs.a
  const b = this.$refs.b.$refs.a
  console.log(a,b)
}

foo()