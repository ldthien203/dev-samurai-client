"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const fc_1 = require("react-icons/fc");
const fa_1 = require("react-icons/fa");
const Logo_1 = __importDefault(require("@/components/Logo"));
const fi_1 = require("react-icons/fi");
const form_1 = require("@/components/ui/form");
const react_router_1 = require("react-router");
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const schemas_1 = require("@/lib/schemas");
const Register = () => {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [passwordStatus, setPasswordStatus] = (0, react_1.useState)({
        message: '8 or more characters',
        color: 'text-muted-foreground',
        icon: <fi_1.FiXCircle />,
    });
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(schemas_1.formSchema),
        defaultValues: {
            name: '',
            gmail: '',
            password: '',
        },
    });
    const checkPassword = (value) => {
        if (!value || value.length < 8) {
            return {
                message: '8 or more characters',
                color: 'text-muted-foreground',
                icon: <fi_1.FiXCircle />,
            };
        }
        if (!/[a-z]/.test(value) || !/[A-Z]/.test(value)) {
            return {
                message: 'Uppercase and lowercase letters',
                color: 'text-muted-foreground',
                icon: <fi_1.FiXCircle />,
            };
        }
        return {
            message: 'All requirements met',
            color: 'text-green-600',
            icon: <fi_1.FiXCircle />,
        };
    };
    const onSubmit = (values) => {
        console.log(values);
    };
    return (<div className="min-h-screen flex-col justify-center items-start mt-10">
      <Logo_1.default />
      <card_1.Card className="w-full max-w-xs min-w-xs text-left px-2 mt-5">
        <card_1.CardHeader>
          <card_1.CardTitle className="text-weight: 700 ">
            Create your account
          </card_1.CardTitle>
          <card_1.CardDescription>
            Please fill in the details to get started.
          </card_1.CardDescription>
        </card_1.CardHeader>
        <card_1.CardContent>
          <form_1.Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <form_1.FormField control={form.control} name="name" render={({ field }) => (<form_1.FormItem className="mb-5">
                    <form_1.FormLabel htmlFor="name">Name</form_1.FormLabel>
                    <form_1.FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <fi_1.FiUser />
                        </span>
                        <input_1.Input id="name" type="text" required className="pl-10" {...field}/>
                      </div>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
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
                    <form_1.FormLabel htmlFor="password">Password</form_1.FormLabel>
                    <form_1.FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <fi_1.FiLock />
                        </span>
                        <input_1.Input id="password" type={showPassword ? 'text' : 'password'} required className="pl-10" {...field} onChange={(e) => {
                field.onChange(e);
                setPasswordStatus(checkPassword(e.target.value));
            }}/>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => setShowPassword((prev) => !prev)} tabIndex={0} role="button" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                          {showPassword ? <fi_1.FiEyeOff /> : <fi_1.FiEye />}
                        </span>
                      </div>
                    </form_1.FormControl>
                    <form_1.FormDescription>
                      <span className={`flex items-center gap-2 text-sm text-gray-500 ${passwordStatus.color}`}>
                        {passwordStatus.icon}
                        {passwordStatus.message}
                      </span>
                    </form_1.FormDescription>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <button_1.Button variant="default" size="lg" type="submit" className="w-full flex flex-wrap items-center gap-2 md:flex-row">
                Create account
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
          Already have an account?
          <span className="ml-2">
            <react_router_1.NavLink to="/auth/sign-in" className="underline font-medium">
              Sign in
            </react_router_1.NavLink>
          </span>
        </card_1.CardDescription>
      </card_1.Card>
      <card_1.CardDescription className="w-full max-w-xs min-w-xs text-left text-xs pt-5 px-2">
        By signing up, you agree to our{' '}
        <span className="underline font-small text-black">Terms of Use</span>{' '}
        and{' '}
        <span className="underline font-small text-black">Privacy Policy</span>.
        Need help?{' '}
        <span className="underline font-small text-black">Get in touch.</span>
      </card_1.CardDescription>
    </div>);
};
exports.default = Register;
