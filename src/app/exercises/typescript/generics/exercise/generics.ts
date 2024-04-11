// @ts-nocheck
function identity<Type>(arg: Type): Type {
  return arg
}

class Generic<ReturnType, Type = string> {
  foo?: Type
  bar(x: Type): ReturnType {
    return x as ReturnType
  }
}
