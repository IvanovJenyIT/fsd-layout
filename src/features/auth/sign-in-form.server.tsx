"use server";

import { getProviders } from "next-auth/react";
// import { TestEmailSignInForm } from "./_ui/test-email-sign-in-form";
import { privateConfig } from "@/components/config/private";
import { cn } from "@/components/ui/utils";
import { EmailSignInForm } from "./_ui/email-sign-in-form";
import { Divider } from "./_ui/divider";
import { ProviderButton } from "./_ui/provider-button";

export async function SignInForm({ className }: { className?: string }) {
  const providers = await getProviders();
  const oauthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === "oauth",
  );

  // const testToken = privateConfig.TEST_EMAIL_TOKEN;

  return (
    <div className={cn("grid gap-6", className)}>
      {/* {testToken ? (
        <TestEmailSignInForm testToken={testToken} />
      ) : (
        <EmailSignInForm />
      )} */}
      <EmailSignInForm />

      <Divider />
      {oauthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
