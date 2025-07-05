"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const form_1 = require("@/components/ui/form");
const Logo_1 = __importDefault(require("@/components/Logo"));
const input_1 = require("@/components/ui/input");
const fc_1 = require("react-icons/fc");
const fa_1 = require("react-icons/fa");
const fi_1 = require("react-icons/fi");
const react_router_1 = require("react-router");
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const schemas_1 = require("@/lib/schemas");
const Login = () => {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(schemas_1.formSchema),
        defaultValues: {
            gmail: '',
            password: '',
        },
    });
    const onSubmit = (values) => {
        console.log(values);
    };
    return (<div className="min-h-screen flex-col justify-center items-start mt-10">
      <Logo_1.default />
      <card_1.Card className="w-full max-w-xs min-w-xs text-left px-2 mt-5">
        <card_1.CardHeader>
          <card_1.CardTitle className="text-weight: 700">
            Sign in to your account
          </card_1.CardTitle>
          <card_1.CardDescription>
            Welcome back! Please sign in to continue.
          </card_1.CardDescription>
        </card_1.CardHeader>
        <card_1.CardContent>
          <form_1.Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <form_1.FormField control={form.control} name="gmail" render={({ field }) => (<form_1.FormItem className="mb-5">
                    <form_1.FormLabel htmlFor="email">Email</form_1.FormLabel>
                    <form_1.FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <fi_1.FiMail />
                        </span>
                        <input_1.Input id="email" type="email" required className="pl-10" {...field}/>
                      </div>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="password" render={({ field }) => (<form_1.FormItem className="mb-5">
                    <form_1.FormLabel htmlFor="password">
                      Password
                      <react_router_1.NavLink to="#" className="ml-auto inline-block font-normal text-sm underline-offset-4 hover:underline text-black underline">
                        Forgot password?
                      </react_router_1.NavLink>
                    </form_1.FormLabel>
                    <form_1.FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <fi_1.FiLock />
                        </span>
                        <input_1.Input id="password" type={showPassword ? 'text' : 'password'} required className="pl-10" {...field}/>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => setShowPassword((prev) => !prev)} tabIndex={0} role="button" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                          {showPassword ? <fi_1.FiEyeOff /> : <fi_1.FiEye />}
                        </span>
                      </div>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <button_1.Button variant="default" size="lg" type="submit" className="w-full flex flex-wrap items-center gap-2 md:flex-row">
                Sign In
              </button_1.Button>
            </form>
          </form_1.Form>
          <div className="flex items-center mt-6">
            <div className="flex-grow h-px bg-gray-200"/>
            <span className="mx-2 text-xs text-gray-500">Or continue with</span>
            <div className="flex-grow h-px bg-gray-200"/>
          </div>
        </card_1.CardContent>
        <card_1.CardFooter className="flex w-full m-0 justify-between">
          <button_1.Button variant="outline" type="button" size="sm" className="w-47/100">
            <fc_1.FcGoogle /> Google
          </button_1.Button>
          <button_1.Button variant="outline" type="button" size="sm" className="w-47/100">
            <fa_1.FaMicrosoft /> Microsoft
          </button_1.Button>
        </card_1.CardFooter>
        <card_1.CardDescription className="text-center">
          Don't have an account?
          <span className="ml-2">
            <react_router_1.NavLink to="/auth/sign-up" className="underline font-medium">
              Sign up
            </react_router_1.NavLink>
          </span>
        </card_1.CardDescription>
      </card_1.Card>
    </div>);
};
exports.default = Login;
