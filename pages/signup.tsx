import { useRouter } from "next/router";
import { AuthLayout } from "layouts/auth.layout.tsx";
import { Button, Typography, Form, Input, theme } from "antd";
const { Text, Link } = Typography;

const { useToken } = theme;

export default function Signup() {
  const { token } = useToken();
  const router = useRouter();

  return (
    <AuthLayout title="Sign up">
      <div className="mt-2 mb-6">
        <Text style={{ color: token.colorTextTertiary }}>
          Already had an account?
        </Text>
        <Link onClick={() => router.push("/signin")} className="ml-3">
          {" "}
          Sign in
        </Link>
      </div>
      <Form
        name="signup"
        layout="vertical"
        className="w-full"
        onFinish={() => {
          router.push("/signin");
        }}
      >
        <Form.Item label="First name" name="first_name">
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item label="Last name" name="last_name">
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Company name" name="company_name">
          <Input placeholder="Company name" />
        </Form.Item>
        <Form.Item>
          <Button disabled={false} block type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
      <div
        className="mb-24 text-sm text-center"
        style={{
          color: token.colorTextTertiary,
        }}
      >
        By clicking the “Sign up” button, you have agree to our
        <br />
        <Link style={{ color: token.colorPrimary }}>
          {" "}
          Term of Services
        </Link> and <Link>Privacy Policy</Link>
      </div>
    </AuthLayout>
  );
}
