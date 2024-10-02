import Background from '@/assets/login2.png';
import Victory from '@/assets/victory.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { toast } from 'sonner';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateSignup = () => {
    if(!email.length){
      toast.error("Email is required.");
      return false;
    }
    if(!password.length){
      toast.error("Password is required.");
      return false;
    }
    if(password !== confirmPassword){
      toast.error("Password and confirm password should be same.");
      return false;
    }
    return true;
  }

  const handleLogin = async() => {

  }

  const handleSignup = async() => {
    if(validateSignup()){
      alert("Done")
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl xl:grid-cols-2">
      <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
      <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
      <img src={Victory} alt="Victory Emoji" className="h-[100px]" />
      </div>
      <p className="font-medium text-center">
        Fill in the details to get started with the best chat app!
      </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Tabs className='w-3/4'>
          <TabsList className="w-full rounded-none bg-transparent">
          <TabsTrigger
  value="login"
  className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none w-full border-b-2 data-[state=active]:border-b-purple-500 data-[state=active]:text-black data-[state=active]:font-semibold p-3 transition-all duration-300 focus:outline-none  hover:outline-none"
  >Login
</TabsTrigger>
<TabsTrigger 
  value="signup"
  className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none w-full border-b-2 data-[state=active]:border-b-purple-500 data-[state=active]:text-black data-[state=active]:font-semibold p-3 transition-all duration-300 focus:outline-none  hover:outline-none"
  >Signup
</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="flex flex-col gap-5 mt-10">
          <Input 
            placeholder="Email"
            type="email"
            className="rounded-full p-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Password"
            type="password"
            className="rounded-full p-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
          </TabsContent>
          <TabsContent value="signup" className="flex flex-col gap-5">
          <Input 
            placeholder="Email"
            type="email"
            className="rounded-full p-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Password"
            type="password"
            className="rounded-full p-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            placeholder="Confirm Password"
            type="password"
            className="rounded-full p-6"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button className="rounded-full p-6" onClick={handleSignup}>Sign Up</Button>
          </TabsContent>
        </Tabs>
      </div>
      </div>
      {/* <div className="hidden xl:flex justify-center items-center">
        <img src={Background} alt="background Login" className="h-[700px]" />
      </div> */}
      </div>
     
    </div>
  )
}

export default Auth